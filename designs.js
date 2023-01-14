// Set color picker and size picker
const colorPicker = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');

// Create global variables to represent table height (rows) and width (columns)
// Create initial grid when page has loaded
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
makeGrid(inputHeight.value, inputWidth.value);

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    let height = inputHeight.value;
    let width = inputWidth.value;
    makeGrid(height, width);
    });

/**
  * @desc create a grid of squares
  * @param int $height - number of squares representing the height of the grid
  * @param int $width - number of squares representing the width of the grid
*/
function makeGrid(height, width) {
    table.innerHTML = "";
    for (var i = 0; i < height; i++) {
      var row = table.insertRow(i);
      for (var j = 0; j < width; j++) {
          var cell = row.insertCell(j);
          cell.addEventListener('click', function(e) {
            e.target.style.backgroundColor = colorPicker.value;
          })
        }
      }
    }
