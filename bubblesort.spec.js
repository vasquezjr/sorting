describe('Bubble Sort', function(){
  
beforeAll(function () {
  spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
});

it('uses swap', function () {
  //tootsiepop.getToCenter();
  bubbleSort([3, 2, 1]);
  expect(window.swap.calls.count()).toEqual(3);
});


  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles single item', function(){
    expect( bubbleSort([2]) ).toEqual([2]);
  });
  it('handles two inputs', function(){
    expect( bubbleSort([4, 2]) ).toEqual([2, 4]);
  });
  it('handles multiple inputs', function(){
    expect( bubbleSort([4, 5, 6, 2, 1, 10, 11, 8, 9, 3, 7]) ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
});