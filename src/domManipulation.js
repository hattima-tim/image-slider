const images = document.querySelectorAll('img');
const circles = document.querySelectorAll('.dot');
circles[0].style.backgroundColor = 'red';
let a = 0;

const showNextImage = () => {
  if (a === 3) {
    a = -1;
  }
  a += 1;

  switch (a) {
    case 0:
      images[3].classList.replace('visible', 'hidden');
      images[0].classList.replace('hidden', 'visible');
      circles[3].style.backgroundColor = '#bbb';
      circles[0].style.backgroundColor = 'red';
      break;
    case 3:
      images[2].classList.replace('visible', 'hidden');
      images[3].classList.replace('hidden', 'visible');
      circles[2].style.backgroundColor = '#bbb';
      circles[3].style.backgroundColor = 'red';
      break;
    default:
      images[a - 1].classList.replace('visible', 'hidden');
      images[a].classList.replace('hidden', 'visible');
      circles[a - 1].style.backgroundColor = '#bbb';
      circles[a].style.backgroundColor = 'red';
  }
};

const showPreviousImage = () => {
  a -= 1;
  if (a < 0) {
    a = 3;
  }
  switch (a) {
    case 0:
      images[1].classList.replace('visible', 'hidden');
      images[0].classList.replace('hidden', 'visible');
      circles[1].style.backgroundColor = '#bbb';
      circles[0].style.backgroundColor = 'red';
      break;
    case 3:
      images[0].classList.replace('visible', 'hidden');
      images[3].classList.replace('hidden', 'visible');
      circles[0].style.backgroundColor = '#bbb';
      circles[3].style.backgroundColor = 'red';
      break;
    default:
      images[a + 1].classList.replace('visible', 'hidden');
      images[a].classList.replace('hidden', 'visible');
      circles[a + 1].style.backgroundColor = '#bbb';
      circles[a].style.backgroundColor = 'red';
  }
};

const linkCircleWithClickedImage = (e) => {
  images[a].classList.replace('visible', 'hidden');
  images[e.target.dataset.index].classList.replace('hidden', 'visible');
  circles[a].style.backgroundColor = '#bbb';
  e.target.style.backgroundColor = 'red';
  a = Number(e.target.dataset.index);
};

export {
  showNextImage,
  showPreviousImage,
  linkCircleWithClickedImage,
};
