import refs from './refs.js';
import colors from './colors.js';


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;

refs.start.addEventListener('click', onStartBtn);
refs.stop.addEventListener('click', onStopBtn);

function onStartBtn() {
  refs.start.disabled = true;
  intervalId = setInterval(() => {
    const randomColor = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.background = colors[randomColor];
}, 1000);
}

function onStopBtn() {
  clearInterval(intervalId);
  refs.start.disabled = false;
}













// const date = new Date();
// console.log(date.getTime());


