//Find the sum of all elements in an array:

const arr = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum); //output 10

// Find the max and min value in an array:

const anotherArr = [4, 9, 2, 7];
let maxValInArr = Math.max(...anotherArr);
console.log(`Maximum Value: ${maxValInArr}`); //9
let minValInArr = Math.min(...anotherArr);
console.log(`Maximum Value: ${minValInArr}`); //2

//Count numbers of even and odd:
let arr1 = [1, 2, 3, 4, 5]

let even = 0; //1 => 2 = 2
let odd = 0; //1 => 2 => 3 = 3
for(let i = 0; i<arr1.length; i++){
  if( arr[i]%2 === 0 ){
   even++;
  } else {
    odd++;
  }
}
console.log(`Even Count: ${even} and Odd Count: ${odd}`);

//Printing an array in a reverse order using for loop:
let reverseArr = [1, 2, 3];
console.log("Reverse Array:");
for (let i = reverseArr.length - 1; i > -1; i--) {
  let reverseVal = reverseArr[i];
  console.log(reverseVal);
}

// Check if the element (7) exists in an array:
const elementExistInArr = [5, 7, 9];
console.log(elementExistInArr.includes(7)); //true
