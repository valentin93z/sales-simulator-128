import { dialogData, getRandomElement } from "./dialogData";

let currentScene = null;
let isInDialogue = false;
let onDialogueEnd = null;
let pendingNextScene = null;
let lastClientPhrase = null;

export function startDialogue(sceneId, onComplete) {
  if (isInDialogue) return;
  isInDialogue = true;
  onDialogueEnd = onComplete;
  currentScene = currentScene ? currentScene : sceneId;
  showCurrentScene();
}

function showCurrentScene() {
  const scene = dialogData.find(s => s.title === currentScene);
  if (!scene) {
    console.error(`Scene ${currentScene} not found`);
    endDialogue();
    return;
  }
  // Показываем сообщение об ошибке/успехе если есть
  if (scene.message) {
    showMessage(scene.message);
    return;
  }
  // Показываем варианты фраз продавца
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
  
  // Заголовок с эмоцией клиента
  const currentSceneData = dialogData.find(s => s.title === currentScene);
  const emotionEmoji = getEmojiByEmotion(currentSceneData?.emotion);
  dialogue.innerHTML = `<strong>Клиент ${emotionEmoji}</strong><br>${lastClientPhrase}`;
  
  // Создаем кнопки для каждой фразы продавца
  options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    
    // Иконка в зависимости от типа
    const icon = option.type === 'action' ? '🚶' : '💬';
    btn.innerHTML = `${icon} ${option.talk}`;
    
    btn.onclick = () => {
      // Определяем следующий сценарий
      let nextScene = option.to;
      if (Array.isArray(nextScene)) {
        nextScene = getRandomElement(nextScene);
      }
      pendingNextScene = nextScene;
      
      // Показываем фразу продавца
      showSellerTalk(option.talk);
      
      // Находим ответ клиента
      const clientResponse = currentSceneData.client.find(c => c.to === nextScene);
      
      if (clientResponse) {
        setTimeout(() => {
          showClientTalk(clientResponse.talk, nextScene);
          lastClientPhrase = clientResponse.talk;
        }, 500);
      } else {
        setTimeout(() => {
          transitionToScene(nextScene);
        }, 500);
      }
    };
    
    optionsDiv.appendChild(btn);
  });


  const originalHandler = closeBtn.onclick;
  closeBtn.onclick = () => {
    endDialogue();
    
    closeBtn.onclick = originalHandler;
  };
}

function showSellerTalk(text) {
  const dialogue = document.getElementById("dialogue");
  dialogue.innerHTML = `<strong>Продавец:</strong><br>${text}`;
}

function showClientTalk(text, nextScene) {
  const dialogue = document.getElementById("dialogue");
  const optionsDiv = document.getElementById("options");
  
  dialogue.innerHTML = `<strong>Клиент:</strong><br>${text}`;
  
  optionsDiv.innerHTML = "";
  
  const nextBtn = document.createElement("button");
  nextBtn.className = "option-btn";
  nextBtn.innerHTML = "Далее →";
  nextBtn.onclick = () => {
    transitionToScene(nextScene);
  };
  optionsDiv.appendChild(nextBtn);
}

function transitionToScene(nextScene) {
  currentScene = nextScene;
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
    currentScene = nextScene;
    
    if (message.type === 'success') {
      if (window.gameEffects && window.gameEffects.completeSale) {
        window.gameEffects.completeSale();
      }
      endDialogue();
    } else {
      showCurrentScene();
    }
    
    closeBtn.onclick = originalHandler;
  };
}

function endDialogue() {
  const dialogueUI = document.getElementById("textbox-container");
  dialogueUI.style.display = "none";
  isInDialogue = false;
  
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