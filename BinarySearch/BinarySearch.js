// Given a sorted array arr[] of n elements, write a function to BinarySearch a given element x in arr[].

const BinarySearch = (sortedArray, target, start, end) => {
  const middle = Math.floor((start + end) / 2);
  if (sortedArray[start] > target || sortedArray[end] < target) {
    return -1;
  }

  switch (target) {
    case sortedArray[start]:
      return start;
    case sortedArray[middle]:
      return middle;
    case sortedArray[end]:
      return end;
  }

  if (start == middle || end == middle) {
    return -1;
  }

  if (sortedArray[middle] < target) {
    return BinarySearch(sortedArray, target, middle, end);
  } else {
    return BinarySearch(sortedArray, target, start, middle);
  }
};

const SORTED_ARRAY = [-1, 0, 3, 5, 9, 12];
const TARGET = 0;

console.log(BinarySearch(SORTED_ARRAY, -1, 0, SORTED_ARRAY.length - 1));
console.log(BinarySearch(SORTED_ARRAY, 0, 0, SORTED_ARRAY.length - 1));
console.log(BinarySearch(SORTED_ARRAY, 3, 0, SORTED_ARRAY.length - 1));
console.log(BinarySearch(SORTED_ARRAY, 5, 0, SORTED_ARRAY.length - 1));
console.log(BinarySearch(SORTED_ARRAY, 9, 0, SORTED_ARRAY.length - 1));
console.log(BinarySearch(SORTED_ARRAY, 12, 0, SORTED_ARRAY.length - 1));
console.log(BinarySearch(SORTED_ARRAY, 234, 0, SORTED_ARRAY.length - 1));
