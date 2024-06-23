/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    maxEl = numbers[0];
    numbers.forEach(element => {
        if(element > maxEl){
            maxEl = element;
        }
    });
    return maxEl;
}

module.exports = findLargestElement;