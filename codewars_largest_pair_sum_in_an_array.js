/*
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
*/

const largestPairSum = (numbers) => {
  let largest;
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] + numbers[i + 1] > largest || largest === undefined) {
      largest = numbers[i] + numbers[i + 1];
    }
  }

  return largest
}