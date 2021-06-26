import {
  showNextImage,
  showPreviousImage,
  linkCircleWithClickedImage,
} from './domManipulation';

const forwardButton = document.querySelector('#forward');
const backwardButton = document.querySelector('#backward');
const circles = document.querySelectorAll('.dot');

forwardButton.addEventListener('click', () => {
  showNextImage();
});

backwardButton.addEventListener('click', () => {
  showPreviousImage();
});

circles.forEach((circle, index) => {
  circle.setAttribute('data-index', `${index}`);
  circle.addEventListener('click', (e) => {
    linkCircleWithClickedImage(e);
  });
});
