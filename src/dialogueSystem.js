import { dialogData, getRandomElement } from "./dialogData";

let currentScene = null;
let isInDialogue = false;
let onDialogueEnd = null;
let pendingNextScene = null;
let lastClientPhrase = null;
let isTransitioning = false;
let dialogueStartedFromScene = null;

function sendEventToParent(type, payload = null) {
  if (window.parent !== window) {
    window.parent.postMessage({
      type: type,
      payload: payload,
      timestamp: Date.now()
    }, '*'); // или 'https://cm-education.ru'
  }
}

export function startDialogue(sceneId, onComplete) {
  if (isInDialogue) return;
  isInDialogue = true;
  onDialogueEnd = onComplete;
  
  if (!currentScene) {
    currentScene = sceneId;
    dialogueStartedFromScene = sceneId;
  }
  
  lastClientPhrase = null;
  isTransitioning = false;
  sendEventToParent('GAME_START', { current_scene: currentScene });
  showCurrentScene();
}

function showCurrentScene() {
  const scene = dialogData.find(s => s.title === currentScene);
  if (!scene) {
    console.error(`Scene ${currentScene} not found`);
    endDialogue();
    return;
  }
  
  if (scene.message) {
    showMessage(scene.message);
    return;
  }
  
  showSellerOptions(scene.seller);
}

function showSellerOptions(options) {
  const optionsDiv = document.getElementById("options");
  const dialogue = document.getElementById("dialogue");
  const dialogueUI = document.getElementById("textbox-container");
  const closeBtn = document.getElementById("close");
  
  optionsDiv.innerHTML = "";
  dialogueUI.style.display = "block";
  closeBtn.style.display = "block";
  
  const currentSceneData = dialogData.find(s => s.title === currentScene);
  const emotionEmoji = getEmojiByEmotion(currentSceneData?.emotion);
  
  if (lastClientPhrase) {
    dialogue.innerHTML = `<strong>Клиент ${emotionEmoji}</strong><br>${lastClientPhrase}`;
  } else {
    dialogue.innerHTML = `<strong>Клиент ${emotionEmoji}</strong><br>Выберите фразу:`;
  }
  
  options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    
    const icon = option.type === 'action' ? '🚶' : '💬';
    btn.innerHTML = `${icon} ${option.talk}`;
    
    btn.onclick = () => {
      if (isTransitioning) return;
      isTransitioning = true;
      
      let nextScene = option.to;
      if (Array.isArray(nextScene)) {
        nextScene = getRandomElement(nextScene);
      }
      pendingNextScene = nextScene;
      
      const currentSceneData = dialogData.find(s => s.title === currentScene);
      const clientResponse = currentSceneData.client.find(c => c.to === nextScene);
      
      if (clientResponse) {
        setTimeout(() => {
          const dialogue = document.getElementById("dialogue");
          dialogue.innerHTML = `<strong>Клиент:</strong><br>${clientResponse.talk}`;
          
          lastClientPhrase = clientResponse.talk;
          
          setTimeout(() => {
            transitionToScene(nextScene);
            isTransitioning = false;
          }, 0);
        }, 50);
      } else {
        setTimeout(() => {
          transitionToScene(nextScene);
          isTransitioning = false;
        }, 50);
      }
    };
    
    optionsDiv.appendChild(btn);
  });

  const originalHandler = closeBtn.onclick;
  closeBtn.onclick = () => {
    endDialogue(false);
    closeBtn.onclick = originalHandler;
  };
}

function transitionToScene(nextScene) {
  currentScene = nextScene;
  isTransitioning = false;
  showCurrentScene();
}

function showMessage(message) {
  const dialogue = document.getElementById("dialogue");
  const optionsDiv = document.getElementById("options");
  const closeBtn = document.getElementById("close");
  
  const isError = message.type === 'error';
  const isSuccess = message.type === 'success';
  
  dialogue.innerHTML = `
    <div style="text-align: center;">
      <div style="font-size: 48px; margin-bottom: 10px;">
        ${isError ? '❌' : isSuccess ? '✅' : 'ℹ️'}
      </div>
      <div style="font-size: 18px; margin-bottom: 15px;">
        ${message.text}
      </div>
    </div>
  `;
  
  optionsDiv.innerHTML = "";
  closeBtn.style.display = "block";
  
  const originalHandler = closeBtn.onclick;
  closeBtn.onclick = () => {
    const nextScene = message.next || 'scene_1';
    
    if (isError) {
      // Ошибка — переходим на указанную сцену (попробовать снова)
      currentScene = nextScene;
      lastClientPhrase = null;
      showCurrentScene();
    } else if (isSuccess) {
      // Успех — переходим на следующую сцену, НЕ завершаем диалог
      currentScene = nextScene;
      lastClientPhrase = null;
      
      // Если есть эффект — выполняем
      if (window.gameEffects && window.gameEffects.completeSale) {
        window.gameEffects.completeSale();
      }
      
      // Продолжаем диалог с новой сцены
      showCurrentScene();
    } else {
      // Обычное сообщение
      currentScene = nextScene;
      lastClientPhrase = null;
      showCurrentScene();
    }
    
    closeBtn.onclick = originalHandler;
  };
}

function endDialogue(resetScene = true) {
  const dialogueUI = document.getElementById("textbox-container");
  dialogueUI.style.display = "none";
  isInDialogue = false;
  isTransitioning = false;
  
  if (resetScene) {
    currentScene = null;
    lastClientPhrase = null;
    dialogueStartedFromScene = null;
  }
  
  if (onDialogueEnd) {
    onDialogueEnd();
    onDialogueEnd = null;
  }
}

function getEmojiByEmotion(emotion) {
  switch(emotion) {
    case 'unhappy': return '😞';
    case 'puzzled': return '🤔';
    case 'normal': return '🙂';
    default: return '🙂';
  }
}

export function resetDialogue() {
  if (isInDialogue) {
    endDialogue(true);
  }
  currentScene = null;
  lastClientPhrase = null;
}

export function getCurrentScene() {
  return currentScene;
}