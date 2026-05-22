export function displayDialogue(text, onDisplayEnd) {
  const dialogueUI = document.getElementById("textbox-container");
  const dialogue = document.getElementById("dialogue");
  const optionsDiv = document.getElementById("options");
  
  dialogueUI.style.display = "block";
  optionsDiv.innerHTML = "";
  dialogue.innerHTML = text;
  
  const closeBtn = document.getElementById("close");
  const handleClose = () => {
    dialogueUI.style.display = "none";
    closeBtn.removeEventListener("click", handleClose);
    if (onDisplayEnd) onDisplayEnd();
  };
  
  closeBtn.addEventListener("click", handleClose);
}

export function displayDialogueWithOptions(text, options, onChoice) {
  const dialogueUI = document.getElementById("textbox-container");
  const dialogue = document.getElementById("dialogue");
  const optionsDiv = document.getElementById("options");
  const closeBtn = document.getElementById("close");
  
  optionsDiv.innerHTML = "";
  dialogueUI.style.display = "block";
  dialogue.innerHTML = text;
  closeBtn.style.display = "none";
  
  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = opt.text;
    btn.onclick = () => {
      optionsDiv.innerHTML = "";
      closeBtn.style.display = "block";
      dialogueUI.style.display = "none";
      if (onChoice) onChoice(opt.value, opt);
    };
    optionsDiv.appendChild(btn);
  });
}

export function setCamScale(k) {
  const resizeFactor = k.width() / k.height();
  if (resizeFactor < 1) {
    k.camScale(k.vec2(1));
  } else {
    k.camScale(k.vec2(1.5));
  }
}