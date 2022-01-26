// Given a sorted array arr[] of n elements, write a function to search a given element x in arr[].
const isBadVersion = (n) => {
  const FIRST_BAD_VERSION = 1;
  return n >= FIRST_BAD_VERSION;
};

const FirstBadVersion = (start, n) => {
  const middle = Math.floor((start + n) / 2);

  if (middle == start) {
    return isBadVersion(start) ? start : n;
  }
  if (isBadVersion(middle)) {
    return FirstBadVersion(start, middle);
  } else {
    return FirstBadVersion(middle, n);
  }
};
console.log(FirstBadVersion(1, 2));
