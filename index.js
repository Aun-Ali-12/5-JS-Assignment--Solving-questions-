//Find the sum of all elements in an array:

const arr = [1, 2, 3, 4];
let sum = arr[0] + arr[1] + arr[2] + arr[3];
console.log(sum); //output 10

//Find the max and min value in an array:

const anotherArr = [4, 9, 2, 7];
let maxValInArr = Math.max(...anotherArr);
console.log(`Maximum Value: ${maxValInArr}`); //9
let minValInArr = Math.min(...anotherArr);
console.log(`Maximum Value: ${minValInArr}`); //2

//Count numbers of even and odd:
function evenAndOddCount(arr) {
  let evenCount = 0;
  let oddCount = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  return { even: evenCount, odd: oddCount };
}
const nums = [1, 2, 3, 4, 5];
let result = evenAndOddCount(nums);
console.log(`Even count: ${result.even} and Odd count: ${result.odd}`);

//Reverse an array manually(without using reverse method)
const reverseArr = [1, 2, 3];
// let length = reverseArr.length-1
// console.log(length);
console.log([reverseArr[2], reverseArr[1], reverseArr[0]]); //[ 3, 2, 1 ]

//Check if the element (7) exists in an array:
const elementExistInArr = [5, 7, 9];
console.log(elementExistInArr.includes(7)); //true
