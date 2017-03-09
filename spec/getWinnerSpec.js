
describe('getWinner', function(){

  it('exists', function(){
      expect(getWinner.winner).toBeDefined();
  });
  it('should return winner if the board has three crosses in a row', function(){
    Game.cross(0,0);
    Game.cross(0,1);
    expect(Game.cross(0,2)).toThrow Error("Cross has won the game");

  });
});
