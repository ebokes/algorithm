"use strict";

function flattenAndSort(array) {
  return (array.reduce((a,b)=> a.concat(b),[])).sort((a,b)=>a-b)
}
console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))

//Codewar solution

// "use strict";

// function flattenAndSort(array) {
//   return [].concat(...array).sort((a,b) => a - b);
// }