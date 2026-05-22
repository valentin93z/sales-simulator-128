import { k } from "./kaboomCtx";
import { scaleFactor, gameConfig } from "./constants";
import { displayDialogue, displayDialogueWithOptions, setCamScale } from "./utils";

let money = gameConfig.startMoney;
let salesCount = 0;
let gameTime = 9;

function updateUI() {
  document.getElementById("money").textContent = money;
  document.getElementById("sales").textContent = salesCount;
  document.getElementById("daily-goal").textContent = salesCount;
  document.getElementById("goal-target").textContent = gameConfig.dailyGoal;
}

// Загрузка спрайтов (без анимаций)
k.loadSprite("spritesheet", "./spritesheet.png", {
  sliceX: 8,
  sliceY: 8,
  anims: {
    "idle-down": 56,
    "idle-side": 57,
    "idle-up": 58,
  },
});

k.setBackground(k.Color.fromHex("#4b3862"));

k.scene("main", async () => {
  const mapData = await (await fetch("./map.json")).json();
  const layers = mapData.layers;
  
  const gameMap = k.add([k.pos(0), k.scale(scaleFactor)]);
  const topLayer = k.add([k.pos(0), k.scale(scaleFactor)]);
  const playerLayer = k.add([k.pos(0), k.scale(scaleFactor)]);

  gameMap.z = 0;
  playerLayer.z = 1;
  topLayer.z = 2;
  
  // Рисуем тайловые слои
  for (const layer of layers) {
    if (layer.type === "tilelayer" && layer.data && layer.name !== "furniture_top") {
      for (let i = 0; i < layer.data.length; i++) {
        const tileId = layer.data[i];
        if (tileId === 0) continue;
        
        const x = (i % layer.width) * mapData.tilewidth;
        const y = Math.floor(i / layer.width) * mapData.tileheight;
        
        gameMap.add([
          k.sprite("spritesheet", { frame: tileId - 1 }),
          k.pos(x, y),
        ]);
      }
    }
  }
  
  // Игрок
  let player = null;
  
  if (!player) {
    for (const layer of layers) {
      if (layer.name === "spawn" && layer.objects) {
        for (const entity of layer.objects) {
          if (entity.name === "spawn") {
            player = k.make([
              k.sprite("spritesheet", { anim: 'idle-down' }),
              k.area({ shape: new k.Rect(k.vec2(0, 20), 80, 80) }),
              k.body(),
              k.anchor("center"),
              k.pos(entity.x, entity.y),
              {
                speed: 400,
                direction: 'down',
                isInDialogue: false,
              },
              "player",
            ]);

            playerLayer.add(player);
            console.log(`Игрок создан на спавне: (${entity.x}, ${entity.y})`);
            break;
          }
        }
      }
    }
  }

  // Стены
  for (const layer of layers) {
    if (layer.name === "interier_objects" && layer.objects) {
      for (const boundary of layer.objects) {
        gameMap.add([
          k.area({ 
            shape: new k.Rect(k.vec2(0), boundary.width || 50, boundary.height || 50) 
          }),
          k.body({ isStatic: true }),
          k.pos(boundary.x, boundary.y),
          boundary.name,
        ]);
      }
    }
  }

  for (const layer of layers) {
    if (layer.type === "tilelayer" && layer.data && layer.name === "furniture_top") {
      for (let i = 0; i < layer.data.length; i++) {
        const tileId = layer.data[i];
        if (tileId === 0) continue;
        
        const x = (i % layer.width) * mapData.tilewidth;
        const y = Math.floor(i / layer.width) * mapData.tileheight;
        
        topLayer.add([
          k.sprite("spritesheet", { frame: tileId - 1 }),
          k.pos(x, y),
          k.area(),
          { originalY: y },
          "reception"
        ]);
      }
    }
  }
  
  setCamScale(k);
  
  k.onResize(() => setCamScale(k));
  
  k.onUpdate(() => {
    if (player) {
      k.camPos(player.worldPos().x, player.worldPos().y - 100);
    }

    // Находим верхнюю часть ресепшна
    let topY = Infinity;
    const receptionObjects = topLayer.get("reception");
    for (const obj of receptionObjects) {
      if (obj.pos.y < topY) {
        topY = obj.pos.y;
      }
    }
    
    if (player && receptionObjects.length > 0) {
      // Экспериментально подбираем порог
      // topY = примерно 500-600 (верх ресепшна)
      // Добавляем смещение в 60-80 пикселей
      const threshold = topY + 70; // Подберите это значение
      
      if (player.pos.y < threshold) {
        // Игрок за ресепшном
        topLayer.z = 2;
        playerLayer.z = 1;
      } else {
        // Игрок перед ресепшном
        playerLayer.z = 2;
        topLayer.z = 1;
      }
    }
  });
  
  // =============================================
  // УПРАВЛЕНИЕ МЫШКОЙ
  // =============================================
  
  k.onMouseDown((mouseBtn) => {
    if (mouseBtn !== "left" || player.isInDialogue) return;

    const worldMousePos = k.toWorld(k.mousePos());
    player.moveTo(worldMousePos, player.speed);

    const mouseAngle = player.pos.angle(worldMousePos);

    const lowerBound = 50;
    const upperBound = 125;

    // Меняем спрайт в зависимости от направления движения
    if (mouseAngle > lowerBound && mouseAngle < upperBound) {
      player.play("idle-up");
      player.direction = "up";
      return;
    }

    if (mouseAngle < -lowerBound && mouseAngle > -upperBound) {
      player.play("idle-down");
      player.direction = "down";
      return;
    }

    if (Math.abs(mouseAngle) > upperBound) {
      player.flipX = false;
      player.play("idle-side");
      player.direction = "right";
      return;
    }

    if (Math.abs(mouseAngle) < lowerBound) {
      player.flipX = true;
      player.play("idle-side");
      player.direction = "left";
      return;
    }
  });

  function stopAnims() {
    // При остановке показываем соответствующий спрайт
    if (player.direction === "down") {
      player.play("idle-down");
      return;
    }
    if (player.direction === "up") {
      player.play("idle-up");
      return;
    }
    player.play("idle-side");
  }

  k.onMouseRelease(stopAnims);
  k.onKeyRelease(() => {
    stopAnims();
  });
  
  // =============================================
  // УПРАВЛЕНИЕ КЛАВИШАМИ (стрелки)
  // =============================================
  
  k.onKeyDown(() => {
    if (player.isInDialogue) return;
    
    let moveX = 0;
    let moveY = 0;
    
    if (k.isKeyDown("right")) {
      moveX = 1;
      player.flipX = false;
      player.play("idle-side");
      player.direction = "right";
    }
    if (k.isKeyDown("left")) {
      moveX = -1;
      player.flipX = true;
      player.play("idle-side");
      player.direction = "left";
    }
    if (k.isKeyDown("up")) {
      moveY = -1;
      player.play("idle-up");
      player.direction = "up";
    }
    if (k.isKeyDown("down")) {
      moveY = 1;
      player.play("idle-down");
      player.direction = "down";
    }
    
    if (moveX !== 0 || moveY !== 0) {
      const moveVec = k.vec2(moveX, moveY).unit().scale(player.speed);
      player.move(moveVec);
    }
  });
  
  updateUI();
});

k.go("main");