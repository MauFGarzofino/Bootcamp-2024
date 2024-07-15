// Write a JS program to find the least frequent item of an array. 

let arr2 = [3, 'c', 'c', 'a', 2, 3, 'c', 3, 'c', 2, 4, 9, 9];

let frequency = arr2.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});

console.log(frequency); 

let leastFrequentItem = Object.keys(frequency).reduce((leastFreq, current) => {

    if(frequency[current] < frequency[leastFreq]) {
        return current;
    } else {
        return leastFreq;
    }
});

console.log(leastFrequentItem); 
