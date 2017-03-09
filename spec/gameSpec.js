describe('game', function(){
  it('exists and has a board', function(){
      expect(Game.getBoard).toBeDefined();
  });
  it('has a board that has an array of arrays', function(){
      expect(Game.getBoard()[2][2]).toEqual("");
  });
  it('should have a noughts function', function(){
      expect(Game.noughts).toBeDefined();
  });
  it('nought should put a nought on a specified field on the board', function(){
      Game.noughts(0,1)
      expect(Game.getBoard()[0][1]).toEqual("0");
  });


});
