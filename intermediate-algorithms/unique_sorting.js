function uniteUnique(arr) {
  var val = []; //to store arguments' object values

  //Push arguments' object values into 'val' array
  for (var i = 0; i < arguments.length; i++) {
    val.push(arguments[i]);
  }

  //Concat existing arrays
  var unitedArr = val.reduce(function(a, b) {
    return a.concat(b);
  });

  //Picks an element, checks if matches are found, and if so, deletes those matches
  for (var j = 0; j < unitedArr.length; j++) {
    for (var v = j + 1; v < unitedArr.length - j + 2; v++) {
      if (unitedArr[v] == unitedArr[j]) {
        unitedArr.splice(v, 1);
      }
    }
  }

  return unitedArr;
}



var sorted = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(sorted);
