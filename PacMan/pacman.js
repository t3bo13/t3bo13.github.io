
var pos = 0;

let pageWidth = window.innerWidth;

const pacArray = [
  ['Images/PacMan1.png', 'Images/PacMan2.png'],
  ['Images/PacMan3.png', 'Images/PacMan4.png']
];


// this variable defines what direction PacMan should go into:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;

// This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
var focus = 0;

// This function is called on mouse click. Every time it is called, it updates the PacMan image, position, and direction on the screen.
function Run(pageWidth) {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}

// TODO: Add a Javascript setInterval() method that will call the Run() function above every 300 milliseconds.

setInterval(function() {
  Run(pageWidth);
}, 300);

// This function determines the direction of PacMan based on screen edge detection.
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  // TODO: Complete this to reverse direction upon hitting the screen edge
  if (direction === 0 && pos + imgWidth > pageWidth) {
    direction = 1;
  } else if (direction === 1 && pos < 0) {
    direction = 0;
  }
  return direction;
}
