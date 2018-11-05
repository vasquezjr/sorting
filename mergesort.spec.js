

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here 
    expect( split([3,4])).toEqual([[3], [4]]);
  });

  it('split array when 1 value is in it', function() {
    // your code here 
    expect( split([3])).toEqual([[], [3]]);
  });

  it('s able to split a larger array', function(){
    // test the merging algorithm
    expect( split([1,2,3,4,5,6])).toEqual([[1,2,3],[4,5,6]] );
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect( merge([1,3,5,7], [2,4,6])).toEqual( [1,2,3,4,5,6,7] );
  });
  it('merges left test case', function(){
    // test the merging algorithm
    expect( merge([1,2,3,4,5,6,7], [8,9,10,11,12])).toEqual( [1,2,3,4,5,6,7,8,9,10,11,12] );
  });

  it('merges right test case', function(){
    // test the merging algorithm
    expect( merge([1,2,3,4,5,6,7], [8,9,10,11,12])).toEqual( [1,2,3,4,5,6,7,8,9,10,11,12] );
  });
});