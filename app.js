$(document).ready(function() {
 
  var board = new Array(3);
  board[0] = new Array(3);
  board[1] = new Array(3);
  board[2] = new Array(3);

  $('.box').click(function() {
    var col = $(this).attr('class').slice(-1);
    var row = $(this).parent().attr('class').slice(-1);

    console.log("Row: " + row + " Col: " + col);
    // console.log($(this).attr('class'));
    // console.log($(this).parent());
  })
});