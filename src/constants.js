export const scaleFactor = 1;

// Для мобилок можно динамически определять масштаб
export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// На мобилках можно уменьшить скорость или масштаб
export const gameConfig = {
  width: window.innerWidth,
  height: window.innerHeight,
  startMoney: 5000,
  dailyGoal: 5,
  playerSpeed: isMobile ? 300 : 400, // Чуть медленнее на мобилках
};

export const products = {
  laptop: { name: "Ноутбук", price: 50000, profit: 10000 },
  phone: { name: "Смартфон", price: 30000, profit: 5000 },
  headphones: { name: "Наушники", price: 5000, profit: 1000 },
};