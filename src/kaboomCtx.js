import kaboom from "kaboom";
import { scaleFactor, gameConfig } from "./constants";

// Получаем размеры окна
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

export const k = kaboom({
  global: false,
  touchToMouse: true,
  canvas: document.getElementById("game"),
  width: windowWidth,
  height: windowHeight,
  scale: scaleFactor,
  pixelDensity: 1,
  debug: false,
});

// Обновляем размер при изменении окна
window.addEventListener("resize", () => {
  k.resize(window.innerWidth, window.innerHeight);
});

// Фокус на canvas
const canvas = document.getElementById("game");
if (canvas) {
  canvas.addEventListener("click", () => canvas.focus());
}