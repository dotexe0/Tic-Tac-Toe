$(document).ready(function() {
  var counter = 0;
  var X = "X";
  var O = "O";
  var togglePlayer = X;
  var previouslySelected = {
    X:[],
    O:[]
  };

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

  function hasBeenClicked() {
  //   if (($(this).find('.player')[0])) {
  //     alert("THIS BOX HAS BEEN SELECTED! PICK ANOTHER BOX");
  //   } else {
  //     $(this).append("<h2 class='player'>" + togglePlayer + "</h2>");
  //     console.log($(this).find('.player')[0].innerText);
  //      counter += 1;
  //     }
  };

  function checkColWinner(){
    // var x = 0;
    // var o = 0;
    // for (let col = 0; col < 3; col++) {
    //   for(let row = 0; row < 3; row++) {
    //     console.log($('.col' + col));
    //
    //     if ($('.col' + col).find('.player')[0]) {
    //       console.log($('.col-' + col));
    //     };
    //   };
    // };
  };

  function isGameOver(counter) {
    if (counter >= 9) {
      alert("TIE! NO WINNER.");
    }
  };

  $('.box').click(function() {
    var col = $(this).attr('class').slice(-1);
    var row = $(this).parent().attr('class').slice(-1);
    var box = [col, row];

    if (($(this).find('.player')[0])) { // check if box has child of class player (i.e. if its been clicked)
      alert("THIS BOX HAS BEEN SELECTED! PICK ANOTHER BOX");
    } else {
      $(this).append("<h2 class='player'>" + togglePlayer + "</h2>");
      $(this).find(".player").addClass(togglePlayer);
      console.log(togglePlayer);
      console.log($(this).find('.player')[0].innerText);
      previouslySelected.X.push(box);
      console.log(previouslySelected);
       counter += 1;
       toggleTurn(); // works
       isGameOver(counter);
    };
    // hasBeenClicked();
    // console.log(col);
    // console.log(row);
    // isWinner();
    // checkColWinner();
  });
});
