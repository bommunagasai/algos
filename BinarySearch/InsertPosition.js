const InsertPosition = (sortedArray, target, start, end) => {
  const middle = Math.floor((start + end) / 2);

  if (sortedArray[start] > target) {
    return start;
  }

  if (sortedArray[end] < target) {
    return end+1;
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
    return start+1;
  }

  if (sortedArray[middle] < target) {
    return InsertPosition(sortedArray, target, middle, end);
  } else {
    return InsertPosition(sortedArray, target, start, middle);
  }
};

const INSERT_ARRY = [1,3,5,6];
const INSERT_VALUE = 7
console.log(InsertPosition(INSERT_ARRY, INSERT_VALUE, 0, INSERT_ARRY.length -1));
