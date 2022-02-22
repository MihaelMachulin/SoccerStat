// Есть два сортированных массива с числами.
// Нужно написать функцию, которая возвращает новый массив,
// содержащий элементы, которые встречаются в обоих массивах.

const a = [ 1, 2, 4, 7, 11, 19 ];
const b = [ 2, 7, 19, 28, 31 ];

function findEqualElements(arr1, arr2) {
  const maxLen = arr1.length < arr2.length ? arr2.length : arr1.length
  let result = [], i = 0, j = 0

  for(let n = 0; n < maxLen; n++) {
    if (arr1[i] === arr2[j]) {result.push(arr1[i]); }
    arr1[i] > arr2[j] ? j++ : i++
  }
  console.log(result)
  return result
}

// Примеры
findEqualElements([1, 2, 3], [2]); // => [2]
findEqualElements([2], [1, 2, 3]); // => [2]
findEqualElements([1, 2, 2, 3], [2, 2, 2, 2]); // => [2, 2]

findEqualElements([2], [2, 2]); // => [2]
findEqualElements([2, 2], [2, 2]); // => [2, 2]
console.log(findEqualElements(a, b))