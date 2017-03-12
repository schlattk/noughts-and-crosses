var print = (function (){

  var printer = function(board){
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
  };
  var printWin = function(board){
    console.log(getWinner.winner(board));
  };

  return{print: printer,
        printWin: printWin};
})();
