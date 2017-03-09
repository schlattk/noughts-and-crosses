

var Game = (function(getWinner){

  board = [[" ",""," "],["","  ",""],[" ",""," "]];

  var getBoard = function(){
    print.print(board);
    return board;
  };

  var noughts = function(x,y){
    board[x][y] = "O";
    getWinner.winner(board);
  };

  var crosses = function(x,y){
    board[x][y] = "X";
    getWinner.winner(board);
  };

  var reset = function(){
    board = [[" ",""," "],["","  ",""],[" ",""," "]];
  };

  return {board:getBoard,
          nought:noughts,
          cross:crosses,
          reset:reset
         };

}(getWinner,print));
