
var Game = (function(){

  var board = [[" ",""," "],["","  ",""],[" ",""," "]];

  var getBoard = function(){
    print.print(board);
    return board;
  };

  var noughts = function(x,y){
    if (validation.valid(x,y,board)){board[x][y] = "O";}
      print.print(board);
      // getWinner.winner(board);
      print.printWin(board);
  };

  var crosses = function(x,y){
    if (validation.valid(x,y,board)){board[x][y] = "X";}
      print.print(board);
      // getWinner.winner(board);
      print.printWin(board);
    };

  var reset = function(){
    board = [[" ",""," "],["","  ",""],[" ",""," "]];
  };

  return {board:getBoard,
          nought:noughts,
          cross:crosses,
          reset:reset
         };

}(validation,getWinner,print));
