$(document).ready(function() {
  var counter = 0;
  var X = "X";
  var O = "O";
  var togglePlayer = X;

  var board = new Array(3);
  board[0] = new Array(3);
  board[1] = new Array(3);
  board[2] = new Array(3);

  function toggleTurn() {
    if (togglePlayer == X) {
      togglePlayer = O;
    } else {
      togglePlayer = X;
    }
  };

  function checkWinner(){
    for (let i = 0; i <= 2; i++) {
        if (board[i][0] == board[i][1] &&
            board[i][1] == board[i][2] &&
            board[i][0] !== undefined) {
              $('body').append("<h1 class='winner'>" + togglePlayer + " is the winner on row " + i + "</h1>");
              return true;
          };

        if(board[0][i] == board[1][i] &&
           board[1][i] == board[2][i] &&
           board[0][i] !== undefined) {
             $('body').append("<h1 class='winner'>" + togglePlayer + " is the winner on col " + i + "</h1>");
             return true;
         };
      };
      if(board[0][0] == board[1][1] &&
         board[1][1] == board[2][2] &&
         board[0][0] !== undefined) {
           $('body').append("<h1 class='winner'>" + togglePlayer + " is the winner on left diag</h1>");
           return true;
        };
     if(board[0][2] == board[1][1] &&
        board[1][1] == board[2][0] &&
        board[0][2] !== undefined) {
          $('body').append("<h1 class='winner'>" + togglePlayer + " winner on right diag</h1>");
          return true;
      };
  };

  function isGameOver(counter) {
    if (counter >= 9 && !checkWinner()) {
      $('body').append("<h1 class='tie'>TIE!</h1>");
      $('.box').unbind('click');
      $('.title').append("<button type='button' name='button' class='restart'>Restart</button>");
      document.getElementsByClassName('restart').onclick = restartGame();
      return;
    }
  };

  function restartGame(){
    $('.restart').click(function() {
      location.reload();
    });
  };

  $('.box').click(function() {
    var col = $(this).attr('class').slice(-1);
    var row = $(this).parent().attr('class').slice(-1);
    var box = [col, row];

    if (($(this).find('.player')[0])) { // check if box has child of class player (i.e. if its been clicked)
      alert("PICK ANOTHER BOX YOU GOOF");
    } else {
      $(this).append("<h2 class='player'>" + togglePlayer + "</h2>");
      $(this).find(".player").addClass(togglePlayer); // add class X or class O to .player
      board[row][col] = togglePlayer; //add box selected to the board data structure

      if(checkWinner()){
        $('.box').unbind('click');
        $('.title').append("<button onclick='restartGame()' type='button' name='button' class='restart'>Restart</button>");
        document.getElementsByClassName('restart').onclick = restartGame();
        return;
      };
      counter += 1;
      toggleTurn();
      isGameOver(counter);
    };
  });
});
