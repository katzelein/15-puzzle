

describe("15 Puzzle", function() { 

  describe('assignNumber function', () => { 
    var numbersGenerated = [];
    beforeEach(() => {
      numbersGenerated = [];
    })
    
    it("given a width and height of 1, it should return the number 1", () => {
      var num = assignNumber(1,1);
      expect(num).toContain(1)
    });

    it("given a width and height of 2, it should populate the numbersGenerated variable with a number between 1 and 4", () => {
      var num = assignNumber(2,2);
      expect(num).toContain(1,2,3,4)
      // expect(num).toBeLessThan(5)
    })

    it("given a width and height of 4, it should populate the numbersGenerated variable with a number between 1 and 16", () => {
      var num = assignNumber(4,4);
      expect(num).toContain(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
      // expect(num).toBeLessThan(17)
    })
  });

  describe('generateRandomBoard function', () => {
    xit('given a width and height of 1, it returns a board of 1 x 1', () => {
      expect(generateRandomBoard(1,1)).toEqual([1])
    })

    xit('given a width and height of 2, it returns a board of 2 x 2', () => {
      assignNumber(2,2)
      expect(generateRandomBoard(2,2)).toEqual([1,2],[3,4])
    })
  })
});







  // xdescribe('createRow function', () => {
    
  //   it("should return a string of HTML with the appropriate row number", function() {
  //     const num = 3;
  //     expect(createRow(num)).toEqual("<tr id='row3'>")
  //   });
  // });

  // xdescribe('createTile function', () => {

  //   it('should produced a new tile with an id containing the arguments passed into it', () => {
  //     const x = 1, y = 2;
  //     expect(createTile(x, y)).toContain("id='1-2'>")
  //   })

  //   xit('should call the assignNumber function', () => {
  //     spyOn('assignNumber');
  //     createTile(1,2);
  //     expect(thing.assignNumber).toHaveBeenCalled()
  //   });
  // });



  // xdescribe('cellClick function', () => {

  //   it('can switch the textContents of the cells if there are no blocks in between the empty and the clicked cells', () => {

  //     var spyEvent = spyOnEvent('0-1', 'click');
  //     $('0-1').trigger( "click" );

  //     expect(spyEvent).toEqual( [ { id:'0-0', text: 1 }, { id: '0-1', text: 25 } ] )
  //   })
  // })

  // xdescribe('shiftCell', () => {
  //   it('returns an empty board given an empty board', () => {
  //     expect(
  //       shiftCell([], null)
  //     ).toEqual([])
  //   })

  //   it('returns a single-cell board given a single-cell board', () => {
  //     expect(
  //       shiftCell([[1]], 1)
  //     ).toEqual([[1]])
  //   })

  //   it('shifts a single-row board by a single cell', () => {
  //     expect(
  //       shiftCell([[1, 2]], 1)
  //     ).toEqual([[2, 1]]);
  //   })

  //   it('shifts a single-column board by a single cell', () => {
  //     expect(
  //       shiftCell([[1], 
  //                  [2]], 1)
  //     ).toEqual([[2], 
  //                [1]]);
  //   })

    // it('returns a board with a single shift given a one-row board', () => {
    //   expect(
    //     shiftCell([[1, 2],
    //                [3, 4]], 3)
    //   ).toEqual([[1, 2],
    //              [4, 3]])
    // })
