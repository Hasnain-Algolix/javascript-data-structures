const arr = [4, 2, 6, 5, 1, 3];

const insertionSort = (array) => {
  let temp;
  for (let i = 1; i < array.length; i++) {
    temp = array[i];
    for (var j = i - 1; array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};

const result = insertionSort(arr);
console.log(result);
