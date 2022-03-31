// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.
let array = [1,2,3,-5,-6];

function positiveSum(arr) {
    return arr.filter(element => element > 0).reduce((accumulator, current) => accumulator + current, 0);
}
positiveSum(array);

//P: array of numbers. no symbols, no letter no strings.
//R: return sum of the positive numbers
//E:
//       console.log(example[1,2,3] 6)
//       console.log(example[5,2,4]) 6)
//P:
//       filter all of the numbers great than 0, then reduce the array.
