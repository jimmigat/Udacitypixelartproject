// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	console.log("makeGrid is running!");
	
	// to select size input
	
	
	
	var canvas = $('#pixelCanvas');
	var gridHeight = $('#inputHeight').val();
	var gridWidth = $('#inputWidth').val();
	
	canvas.children().remove()
	
	for (var x = 0; x < gridHeight; x++) {
	canvas.append('<tr></tr>');
	}
	
	var rows = $('tr');
	
	for (var y = 0; y < gridWidth; y++) {
	rows.append('<td></td>');
	} 
	
	var cell = canvas.find('td');
	
	// When td is clicked change color of td
	cell.click(function() {
		// Select color input
		console.log("changeColor is running!");
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}

// When size is submitted call makeGrid()
var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});



