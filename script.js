const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const green = document.querySelector('.green');
const clouds = document.querySelector('.clouds');
const counter = document.createElement('p');
let count = 0;

counter.classList.add('counter');
document.body.appendChild(counter);

const jump = () => {
  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 400);
}

const gameLoop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const greenPosition = green.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition <= 252 && pipePosition > 130 && marioPosition < 80) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    green.style.animation = 'none';
    green.style.left = `${greenPosition}px`;

    mario.src = 'img/mario3.png';

    clearInterval(gameLoop);

    const gameOver = document.createElement('img');
    gameOver.src = 'img/giphy.gif';
    gameOver.classList.add('gameover');
    document.body.appendChild(gameOver);

    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Reiniciar Jogo';
    restartBtn.classList.add('restart-btn');
    document.body.appendChild(restartBtn);

    restartBtn.addEventListener('click', () => {
      location.reload();
    });

  }

  count++;
  counter.textContent = `Mario correu ${count/10} metros sem bater nos obstáculos`;

}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);
