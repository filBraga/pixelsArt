const blackPen = document.querySelector('.black');
const redPen = document.querySelector('.red');
const bluePen = document.querySelector('.blue');
const greenPen = document.querySelector('.green');

let penSelected = blackPen;

document.querySelectorAll('.color').forEach((item) => {
  item.addEventListener('click', (event) => {
    penSelected.classList.remove('selected');
    item.classList.add('selected');
    penSelected = item;
  });
});

document.querySelectorAll('.pixel').forEach((item) => {
  item.addEventListener('click', (event) => {
    if (penSelected == blackPen) {
      item.classList.add('black');
    } else if (penSelected == redPen) {
      item.classList.add('red');
    } else if (penSelected == bluePen) {
      item.classList.add('blue');
    } else if (penSelected == greenPen) {
      item.classList.add('green');
    }
  });
});

function clearFunction() {
  document.querySelectorAll('.pixel').forEach((item) => {
    item.classList.remove('black');
    item.classList.remove('red');
    item.classList.remove('blue');
    item.classList.remove('green');
  });
}
