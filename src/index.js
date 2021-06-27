import {
  showNextImage,
  showPreviousImage,
  linkCircleWithClickedImage,
} from './domManipulation';

let myTimer = window.setInterval(showNextImage, 5000);
const forwardButton = document.querySelector('#forward');
const backwardButton = document.querySelector('#backward');
const circles = document.querySelectorAll('.dot');

forwardButton.addEventListener('click', () => {
  showNextImage();
  clearInterval(myTimer);
  myTimer = window.setInterval(showNextImage, 5000);
});

backwardButton.addEventListener('click', () => {
  showPreviousImage();
  clearInterval(myTimer);
  myTimer = window.setInterval(showNextImage, 5000);
});

circles.forEach((circle, index) => {
  circle.setAttribute('data-index', `${index}`);
  circle.addEventListener('click', (e) => {
    linkCircleWithClickedImage(e);
    clearInterval(myTimer);
    myTimer = window.setInterval(showNextImage, 5000);
  });
});
