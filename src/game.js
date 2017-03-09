'use strict';

var Game = (function(getWinner){

  var board = [["","",""],["","",""],["","",""]];

  var getBoard = function(){
    return board;
  };

  var noughts = function(x,y){
    board[x][y] = "0";
  };

  var crosses = function(x,y){
    board[x][y] = "X";
    getWinner.winner(board);
  };

  return {board:getBoard,
          nought:noughts,
          cross:crosses
         };

}(getWinner));
