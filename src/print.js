var print = (function (board){

  var printer = function(board){
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
};

  return{print: printer};

})();
