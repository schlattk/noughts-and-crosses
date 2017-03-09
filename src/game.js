'use strict';

var Game = (function(){

  var board = [["","",""],["","",""],["","",""]];

  var getBoard = function(){
    return board
  }

  var noughts = function(x,y){
    board[x][y] = "0"
  }

  return {getBoard:getBoard,
          noughts:noughts
    }

})();
