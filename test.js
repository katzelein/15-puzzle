

describe("15 Puzzle", function() {
  
  describe('createRow function', () => {
    
    it("should return a string of HTML with the appropriate row number", function() {
      const num = 3;
      expect(createRow(num)).toEqual("<tr id='row3'>")
    });
  });

  describe('createTile function', () => {

    it('should produced a new tile with an id containing the arguments passed into it', () => {
      const x = 1, y = 2;
      expect(createTile(x, y)).toContain("id='1-2'>")
    })

    xit('should call the assignNumber function', () => {
      spyOn('assignNumber');
      createTile(1,2);
      expect(thing.assignNumber).toHaveBeenCalled()
    });
  });

  describe('assignNumber function', () => {
    
    it("should return a number between 1 and 16", function() {

      var num = assignNumber();

      expect(num).not.toBeUndefined();
      expect(num).toBeGreaterThan(0)
      expect(num).toBeLessThan(17)
    });
  });

  xdescribe('cellClick function', () => {

    it('can switch the textContents of the cells if there are no blocks in between the empty and the clicked cells', () => {

      var spyEvent = spyOnEvent('0-1', 'click');
      $('0-1').trigger( "click" );

      expect(spyEvent).toEqual( [ { id:'0-0', text: 1 }, { id: '0-1', text: 25 } ] )
    })
  })
});