

var Game = (function(getWinner){

  board = [[" ",""," "],["","  ",""],[" ",""," "]];

  var getBoard = function(){
    print.print(board);
    return board;
  };

  var noughts = function(x,y){
    if (board[x][y] !== "X" && board[x][y] !== "O"){board[x][y] = "O";}
    getWinner.winner(board);
    print.print(board);
  };

  var crosses = function(x,y){
    if (board[x][y] !== "X" && board[x][y] !== "O"){board[x][y] = "X";}
    getWinner.winner(board);
    print.print(board);
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
