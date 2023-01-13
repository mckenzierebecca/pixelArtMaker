// Set color picker and size picker
var colorPicker = document.getElementById('colorPicker');
var table = document.getElementById('pixelCanvas');
var sizePicker = document.getElementById('sizePicker');

// Create first row and cell
var rows = document.getElementById('inputHeight').value;
var columns = document.getElementById('inputWidth').value;
makeGrid(rows, columns);

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    var rows = document.getElementById('inputHeight').value;
    var columns = document.getElementById('inputWidth').value;
    makeGrid(rows, columns);
    });

// Function to make the grid
function makeGrid(rows, columns) {
    table.innerHTML = "";
    for (var i = 0; i < rows; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < columns; j++) {
            var cell = row.insertCell(j);
            cell.addEventListener('click', function(event) {
                cell.style.backgroundColor = colorPicker.value;
            });
        }
    }
}
