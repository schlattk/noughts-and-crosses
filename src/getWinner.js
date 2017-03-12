

var getWinner = (function(){

  var scanForWinner = function(board){
    if(board[0][0] === board[0][1] && board[0][2] === board[0][1]){
      return board[0][0] + " has won the game !";
    }
    else if(board[1][0] === board[1][1] && board[1][2] === board[1][1]){
      return (board[1][0] + " has won the game !");
    }
    else if(board[2][0] === board[2][1] && board[2][2] === board[2][1]){
      return (board[2][0] + " has won the game !");
    }
    else if(board[0][0] === board[1][0] && board[1][0] === board[2][0]){
      return (board[0][0] + " has won the game !");
    }

    else if(board[0][1] === board[1][1] && board[2][1] === board[1][1]){
      return (board[0][1] + " has won the game !");
    }

    else if(board[0][2] === board[1][2] && board[2][2] === board[0][2]){
      return (board[0][2] + " has won the game !");
    }

    else if(board[0][0] === board[1][1] && board[2][2] === board[1][1]){
      return (board[0][0] + " has won the game !");
    }
    else if(board[0][2] === board[1][1] && board[2][0] === board[0][2]){
      return (board[0][2] + " has won the game !");
    }

};
    return {winner : scanForWinner};

})();
