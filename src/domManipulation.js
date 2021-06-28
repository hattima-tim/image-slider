const images = document.querySelectorAll('img');
const navigationDots = document.querySelectorAll('.dot');
navigationDots[0].style.backgroundColor = 'red';
let imageIndex = 0;

const showNextImage = () => {
  if (imageIndex === 3) {
    imageIndex = -1;
  }
  imageIndex += 1;

  switch (imageIndex) {
    case 0:
      images[3].classList.replace('visible', 'hidden');
      images[0].classList.replace('hidden', 'visible');
      navigationDots[3].style.backgroundColor = '#bbb';
      navigationDots[0].style.backgroundColor = 'red';
      break;
    case 3:
      images[2].classList.replace('visible', 'hidden');
      images[3].classList.replace('hidden', 'visible');
      navigationDots[2].style.backgroundColor = '#bbb';
      navigationDots[3].style.backgroundColor = 'red';
      break;
    default:
      images[imageIndex - 1].classList.replace('visible', 'hidden');
      images[imageIndex].classList.replace('hidden', 'visible');
      navigationDots[imageIndex - 1].style.backgroundColor = '#bbb';
      navigationDots[imageIndex].style.backgroundColor = 'red';
  }
};

const showPreviousImage = () => {
  imageIndex -= 1;
  if (imageIndex < 0) {
    imageIndex = 3;
  }
  switch (imageIndex) {
    case 0:
      images[1].classList.replace('visible', 'hidden');
      images[0].classList.replace('hidden', 'visible');
      navigationDots[1].style.backgroundColor = '#bbb';
      navigationDots[0].style.backgroundColor = 'red';
      break;
    case 3:
      images[0].classList.replace('visible', 'hidden');
      images[3].classList.replace('hidden', 'visible');
      navigationDots[0].style.backgroundColor = '#bbb';
      navigationDots[3].style.backgroundColor = 'red';
      break;
    default:
      images[imageIndex + 1].classList.replace('visible', 'hidden');
      images[imageIndex].classList.replace('hidden', 'visible');
      navigationDots[imageIndex + 1].style.backgroundColor = '#bbb';
      navigationDots[imageIndex].style.backgroundColor = 'red';
  }
};

const linkCircleWithImage = (e) => {
  images[imageIndex].classList.replace('visible', 'hidden');
  images[e.target.dataset.index].classList.replace('hidden', 'visible');
  navigationDots[imageIndex].style.backgroundColor = '#bbb';
  e.target.style.backgroundColor = 'red';
  imageIndex = Number(e.target.dataset.index);
};

export {
  showNextImage,
  showPreviousImage,
  linkCircleWithImage,
};
