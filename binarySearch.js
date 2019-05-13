function binarySearch(arr, num) {
  //define starting and ending point (low and high point)
  let left = 0;
  let right = arr.length - 1;
  //define the middle point to start the search
  let mid = Math.floor((left + right) / 2);
  //loop thru the array until target is found and starting point never reaches to the ending point
  while (num !== arr[mid] && left <= right) {
    //see if target is less than the middle of the array to determine search (left or right)
    if (num < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    //reset middle to the range of the new starting and ending point
    mid = Math.floor((left + right) / 2);
  }
  //once target is found return the index of the array
  if (num === arr[mid]) {
    return mid;
  }
  //defaults to -1 if target is not found in the array
  return -1;
}
