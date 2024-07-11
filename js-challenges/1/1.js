// Write a JS program to get the smallest number in the array.
let arr1 = [12, 6, 10, 2, 45, 100, -2];

let smallestNumber = arr1.reduce((min, current) => {

    if (current < min) {
        return current;
    } else {
        return min;
    }

}, arr1[0]); 

console.log(smallestNumber); 
