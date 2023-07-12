const arr = [4, 2, 6, 5, 1, 3];

const selectionSort = (array) => {
  let min = 0;
  for (let i = 0; i < array.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
};

const result = selectionSort(arr);
console.log(result);
