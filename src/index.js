import {
  showNextImage,
  showPreviousImage,
  linkCircleWithImage,
} from './domManipulation';

let intervalTimer = window.setInterval(showNextImage, 5000);
const forwardButton = document.querySelector('#forward');
const backwardButton = document.querySelector('#backward');
const navigationDots = document.querySelectorAll('.dot');

forwardButton.addEventListener('click', () => {
  showNextImage();
  clearInterval(intervalTimer);
  intervalTimer = window.setInterval(showNextImage, 5000);
});

backwardButton.addEventListener('click', () => {
  showPreviousImage();
  clearInterval(intervalTimer);
  intervalTimer = window.setInterval(showNextImage, 5000);
});

navigationDots.forEach((circle, index) => {
  circle.setAttribute('data-index', `${index}`);
  circle.addEventListener('click', (e) => {
    linkCircleWithImage(e);
    clearInterval(intervalTimer);
    intervalTimer = window.setInterval(showNextImage, 5000);
  });
});
