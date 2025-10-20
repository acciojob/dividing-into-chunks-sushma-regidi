function divide(arr, n) {
  const result = [];
  let current = [];
  let currentSum = 0;

  for (let num of arr) {
    // If adding the current number exceeds n, start a new subarray
    if (currentSum + num > n) {
      result.push(current);
      current = [num];
      currentSum = num;
    } else {
      // Otherwise, add it to the current subarray
      current.push(num);
      currentSum += num;
    }
  }

  // Push the last subarray if it has elements
  if (current.length > 0) {
    result.push(current);
  }

  return result;
}

// Example tests
console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5)); // [[1,2],[3],[4,1,0],[2,2]]
console.log(divide([4, 3, 2, 1], 4));             // [[4],[3],[2,1]]

