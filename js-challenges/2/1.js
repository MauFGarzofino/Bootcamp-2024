// Write a JS program to remove duplicates in an array.

let arr2 = [7, 9, 1, 'a', 'a', 'f', 9, 4, 2, 'd', 'd'];

// Removes duplicates in the array by keeping the first occurrence
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Keeps only the elements that appear exactly once in the array
let uniqueElements = arr2.filter((item, index, self) => self.indexOf(item) === self.lastIndexOf(item));

console.log(removeDuplicates(arr2));
//[
//    7,   9, 1, 'a',
//    'f', 4, 2, 'd'
//]

console.log(uniqueElements); 

//Sample: let arr2 = [7, 9, 1, 'a', 'a', 'f', 9 , 4, 2, 'd', 'd']
//Output: [7, 1, ‘f’, 4, 2]