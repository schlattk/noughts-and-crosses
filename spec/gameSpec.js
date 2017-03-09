describe('game', function(){

  it('exists and has a board', function(){
      expect(Game.board).toBeDefined();
  });
  it('has a board that has an array of arrays', function(){
      expect(Game.board()[2][2]).toEqual(" ");
  });
  it('should have a noughts function', function(){
      expect(Game.nought).toBeDefined();
  });
  it('nought should put a nought on a specified field on the board', function(){
      Game.nought(0,1);
      expect(Game.board()[0][1]).toEqual("O");
  });
  it('should have a cross function', function(){
      expect(Game.cross).toBeDefined();
  });
  it('cross should put a cross on a specified field on the board', function(){
      Game.cross(2,2);
      expect(Game.board()[2][2]).toEqual("X");
  });
  it('should have a reset function', function(){
      Game.cross(2,2);
      Game.reset();
      expect(Game.board()[2][2]).toEqual(" ");
  });

  it('should return winner if the board has three crosses in a row', function(){
    Game.reset();
    Game.cross(0,0);
    Game.cross(0,1);
    expect(function(){Game.cross(0,2);}).toThrow("X has won the game");
  });
  it('should return winner if the board has three crosses in a column', function(){
    Game.reset();
    Game.cross(0,0);
    Game.cross(0,1);
    expect(function(){Game.cross(0,2);}).toThrow("X has won the game");
  });
  it('should return winner if the board has three noughts in a row', function(){
    Game.reset();
    Game.nought(0,0);
    Game.nought(1,1);
    expect(function(){Game.nought(2,2);}).toThrow("O has won the game");
  });
  it('should not allow to override existing entries', function(){
    Game.reset();
    Game.nought(0,0);
    Game.cross(0,0);
    expect(Game.board()[0][0]).toEqual("O");
  });
});
