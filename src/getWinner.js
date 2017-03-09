'use strict';

var getWinner = (function(){

  var scanForWinner = function(board){
    if(board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X"){
      throw new Error("Cross has won the game");
    }

  };
    return {winner : scanForWinner};

})();
