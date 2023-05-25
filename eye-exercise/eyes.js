const ballsL = document.getElementsByClassName('ballL');
const ballsR = document.getElementsByClassName('ballR');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  ballsL[0].style.left = x;
  ballsL[0].style.top = y;
  ballsL[0].style.transform = 'translate(-' + x + ',-' + y + ')';

  ballsR[0].style.left = x;
  ballsR[0].style.top = y;
  ballsR[0].style.transform = 'translate(-' + x + ',-' + y + ')';
};
