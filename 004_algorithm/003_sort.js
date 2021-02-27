/**
 *  2.2.1 バブルソート
 *
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function bubbleSort (array) {
  for(let i = 0; i < array.length; i++){
    for(let j = array.length - 1; i < j ; j--){
      if(array[j] < array[j - 1]){
        let tmp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = tmp;
      }
    }
  }
  return array;
}

/**
 *  2.2.2 挿入ソート
 *
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function insertSort (array) {
  for(let i = 1; i < array.length; i++){
    let tmp = array[i];
    let j = i - 1;
    while(j >= 0 && array[j] > tmp){
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = tmp;
  }

  return array;
}

/**
 *  2.2.3 マージソート
 *
 *  マージソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function mergeSort (arr) {
  if(arr.length <= 1){
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let array = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]){
      array.push(left[leftIndex]);
      leftIndex++;
    } else {
      array.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/**
 *  2.2.4 クイックソート
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function quickSort (a, start = 0, end = (a.length -1)) {
  function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
  function partition(arr, left, right) {
    let middle = arr[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
      while (arr[i] < middle) {
        i++;
      }
      while (arr[j] > middle) {
        j--;
      }
      if (i <= j) {
        swap(arr, i, j);
        i++;
        j--;
      }
    }
    return i;
  }

  let index;
  if (a.length > 1) {
    index = partition(a, start, end);
    if (start < index - 1) {
      quickSort(a, start, index - 1);
    }
    if (index < end) {
      quickSort(a, index, end);
    }
  }

  return a;
};

module.exports = {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort
}
