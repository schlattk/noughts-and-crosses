var validation = (function(){

  var validInput = function(x,y,board){
  if(board[x][y] != "X" && board[x][y] != "O" && x < board[0].length && y < board[0].length){
    return true;}
  else {console.log("invalid entry");}
  };
  return{valid:validInput};
})();
