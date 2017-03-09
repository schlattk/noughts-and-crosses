describe('game', function(){

  it('exists and has a board', function(){
      expect(Game.board).toBeDefined();
  });
  it('has a board that has an array of arrays', function(){
      expect(Game.board()[2][2]).toEqual("");
  });
  it('should have a noughts function', function(){
      expect(Game.nought).toBeDefined();
  });
  it('nought should put a nought on a specified field on the board', function(){
      Game.nought(0,1)
      expect(Game.board()[0][1]).toEqual("0");
  });
  it('should have a cross function', function(){
      expect(Game.cross).toBeDefined();
  });
  it('cross should put a cross on a specified field on the board', function(){
      Game.cross(2,2)
      expect(Game.board()[2][2]).toEqual("X");
  });
});
