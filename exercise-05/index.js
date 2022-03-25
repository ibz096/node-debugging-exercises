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
  let mergedArray = [...arr1, ...arr2];
  
  let store = {};
  mergedArray.forEach((element) => {
    let id = element[key];
    store[id] = element;
  })

  return Object.values(store);
};
