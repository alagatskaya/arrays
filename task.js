function compareArrays(arr1, arr2) {

  let result = arr1.length == arr2.length && arr1.every((n, i) => arr2[i] == n);
  
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter(arr => arr % 3 === 0 && arr > 0).map(arr => arr * 10);

  return resultArr; // array
}
