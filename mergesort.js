function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let middle = wholeArray.length / 2;
  /*let left = [];
  let right = [];
  for (let i = 0; i < middle; i++) {
    
  }*/

  return [wholeArray.slice(0, middle), wholeArray.slice(middle)];
}

function merge(arrayOne, arrayTwo) {
  //Merges Two Sorted Arrays
  let sortedArray = [];
  while (arrayOne.length) {
    while (arrayOne[0] > arrayTwo[0]) {
      sortedArray.push(arrayTwo.shift());
    }
    sortedArray.push(arrayOne.shift());
  }
  sortedArray = [...sortedArray, ...arrayTwo];

  return sortedArray;
}

function mergeSort(array) {
  /* your code here */

}