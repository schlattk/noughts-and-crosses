

var getWinner = (function(){

  var scanForWinner = function(board){
    if(board[0][0] === board[0][1] && board[0][2] === board[0][1]){
      throw (board[0][0] + " has won the game");
    }
    else if(board[1][0] === board[1][1] && board[1][2] === board[1][1]){
      throw (board[1][0] + " has won the game");
    }
    else if(board[2][0] === board[2][1] && board[2][2] === board[2][1]){
      throw (board[2][0] + " has won the game");
    }
    else if(board[0][0] === board[1][0] && board[1][0] === board[2][0]){
      throw (board[0][0] + " has won the game");
    }

    else if(board[0][1] === board[1][1] && board[2][1] === board[1][1]){
      throw (board[0][1] + " has won the game");
    }

    else if(board[0][2] === board[1][2] && board[2][2] === board[0][2]){
      throw (board[0][2] + " has won the game");
    }

    else if(board[0][0] === board[1][1] && board[2][2] === board[1][1]){
      throw (board[0][0] + " has won the game");
    }
    else if(board[0][2] === board[1][1] && board[2][2] === board[2][0]){
      throw (board[0][0] + " has won the game");
    }

};
    return {winner : scanForWinner};

})();
