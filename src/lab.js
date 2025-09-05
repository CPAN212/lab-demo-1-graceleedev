// Write a function that takes an array and returns a new array with the elements reversed.
// Example:
// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]
function reverseArray(arr) {
  const reverseArray = [];

  for (let i = arr.length; i > 0; i--) {
    reverseArray.push(arr[i - 1]);
  }
  // console.log(reverseArray);
  // //output: [ 4, 3, 2, 1 ]

  return reverseArray;
}

// Write a function that removes duplicate numbers from an array and returns a new array with only unique values.
// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]
function removeDuplicates(array) {
  return Array.from(new Set([...array]));
}

// Write a function that sorts an array of numbers in ascending order (smallest to largest).
// Example:
// Input: [5, 2, 9, 1, 5, 6]
// Output: [1, 2, 5, 5, 6, 9]
function sortArray(arr) {
  const sortedArray = [];

  for (let i = 0; i < arr.length; i++) {
  const tempSortedArray =  arr.sort()
  sortedArray.push(tempSortedArray[i]);    
  }

  return sortedArray;
}

// You have a synchronous function that returns a greeting message with your name.
// Your task is to convert it into an asynchronous function that returns a Promise,



function syncGreet(name) {
  return `Hello, ${name}!`;
}

function asyncGreet(name) {
  const promise1 = new Promise((resolve, reject) => {
    resolve(`Hello, ${name}!`);
  });
  return promise1;
}

module.exports = {
  reverseArray,
  removeDuplicates,
  sortArray,
  asyncGreet,
};
