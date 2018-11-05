// function bubbleSort(array) {

//   let end = array.length - 1;
//   while (end) {
//     for (let i = 0; i < end; i++) {
//       const first = array[i];
//       const second = array[i+1];

//       if (first > second) {
//         let temp = first;
//         array[i] = second;
//         array[i+1] = first;
//       }
      
//     }
//     end = end - 1;
//   }
//   return array;
// }


function bubbleSort(array, comparator = (a, b) => a - b) {
  if (array.length === 1 || array.length === 0) {
    return array;
  }
  //let end = array.length - 1;
    for (let i = 0; i < array.length - 1; i++) {
      swap(i, array, comparator);      
    }
    return [...bubbleSort(array.slice(0, array.length - 1)), ...array.slice(array.length - 1)]; 
}

function swap (iDx, array, comparator) {
  if (comparator(array[iDx], array[iDx + 1]) > 0) {
    let temp = array[iDx]
    array[iDx] = array[iDx + 1]
    array[iDx + 1] = temp;
  }
}
