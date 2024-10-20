onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
const flowers = ['🌸', '🏵️', '🌺', '🌻', '🌼', '🌷', '🌹', '🪻'];

function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
  
  // Đặt vị trí xuất hiện của hoa ngẫu nhiên theo chiều ngang (trục X)
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = Math.random() * 3 + 5 + 's'; // Thời gian hoa rơi
  flower.style.fontSize = Math.random() * 10 + 15 + 'px'; // Kích thước hoa ngẫu nhiên

  document.querySelector('.flower-falling-container').appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 5000);
}

setInterval(createFlower, 300);
