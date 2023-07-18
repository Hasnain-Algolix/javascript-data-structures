// function merge(array1, array2) {
//   let combined = [];
//   let i = 0;
//   let j = 0;
//   while (i < array1.length && j < array2.length) {
//     if (array1[i] < array2[j]) {
//       combined.push(array1[i]);
//       i++;
//     } else {
//       combined.push(array2[j]);
//     }
//   }

//   while (i < array1.length) {
//     combined.push(array1[i]);
//     i++;
//   }

//   while (j < array1.length) {
//     combined.push(array2[j]);
//     j++;
//   }

//   return combined;
// }

// const arr1 = [1, 4, 5, 7];
// const arr2 = [2, 3, 6, 8];
// const res = merge(arr1, arr2);
// console.log('result: ', res);

// function mergeSort(array) {
//   if (array.length === 1) return array;

//   let mid = Math.floor(array / 2);
//   let left = array.slice(0, mid);
//   let rigt = array.slice(mid);

//   return merge(mergeSort(left), mergeSort(right));
// }
