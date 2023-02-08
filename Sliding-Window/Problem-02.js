// Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

const arr = [2, 1, 5, 1, 3, 2]
const arr1 = [2, 3, 4, 1, 5]
let K = 3
let K1 = 2



const max = (maxSum, sum) => {
    if (maxSum > sum) {
        return maxSum = maxSum
    }
    else {
        return maxSum = sum
    }
}

// const findMaxSumOfSubarraySizeK = (arr, K) => {
//     let maxSum = 0, sum;

//     for (let i = 0; i < arr.length - K + 1; i++) {
//         sum = 0
//         for (let j = i; j < i + K; j++) {
//             // console.log(i);
//             sum += arr[j]

//         }
//         maxSum = max(maxSum, sum)
//     } 
//     return maxSum
// }

// findMaxSumOfSubarraySizeK(arr, K);


const findMaxSumOfSubarraySizeK = (arr, K) => {
    let maxSum = 0, sum = 0, start = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (i >= K - 1) {
            maxSum = max(maxSum, sum)
            sum -= arr[start]
            start++
        }
    }
    return maxSum
}

console.log(findMaxSumOfSubarraySizeK(arr, K));
console.log(findMaxSumOfSubarraySizeK(arr1, K1));


