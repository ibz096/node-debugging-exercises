/**
 * Merge two arrays of objects together with a given key
 *
 * Parameters:
 * arr1 - first array
 * arr2 - second array
 * key - key to compare
 *
 * Returns:
 * merged array
 *
 * Example:
 * mergeArrays([{id: 1, name: 'a'}, {id: 2, name: 'b'}], [{id: 1, name: 'c'}], 'id');
 * Returns: [{id: 1, name: 'c'}, {id: 2, name: 'b'}]
 */
module.exports = function mergeArrays(arr1, arr2, key) {
  // for (let i = 0; i < arr1.length; i++) {
  //   result.push(arr1[i]);
  // }
  let mergedArray = [...arr1, ...arr2];
  let store = {};
  for ( let i = 0; i < mergedArray.length; i++ ) {
    let id = mergedArray[i][key]
    store[id] = mergedArray[i]
  }

  // console.log(store);
  return (Object.values(store));

  // for (let i = 0; i < arr2.length; i++) {
  //   let found = false;
  //   for (let j = 0; j < result.length; j++) {
  //     if (result[j][key] === arr2[i][key]) {
  //       result[j] = arr2[i];
  //       found = true;
  //       break;
  //     }
  //   }
  //   if (!found) {
  //     result.push(arr2[i]);
  //   }
  // }

  // return result;
};
