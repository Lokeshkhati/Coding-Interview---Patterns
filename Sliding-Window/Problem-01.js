// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.


const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2]
let K = 5

// BRUTE FORCE APPROACH

// calculate the sum of every 5 subarrays and divide by 5

// const averageSubarrayOfSizeK = (arr, K) => {
//     let average = []
//     let size = arr.length - K + 1

//     for (let i = 0; i < size; i++) {
//         let sum = 0
//         for (let j = i; j < i + K; j++) {
//             sum += arr[j]
//         }
//         console.log(sum)

//         average[i] = sum / K
//     }
//     return average
// }

// console.log(averageSubarrayOfSizeK(arr, K));

// the time complexity of the above algorithm will be O(N∗K) where ‘N’ is the number of elements in the input array.



// USING SLIDING WINDOW
// The efficient way to solve this problem would be to visualize each contiguous subarray as a sliding window of ‘5’ elements. This means that when we move on to the next subarray, we will slide the window by one element. So, to reuse the sum from the previous subarray, we will subtract the element going out of the window and add the element now being included in the sliding window. This will save us from going through the whole subarray to find the sum and, as a result, the algorithm complexity will reduce to O(N)

const averageSubarrayOfSizeK = (arr, K) => {
    let average = []
    
    let start = 0, sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (i >= K - 1) {
            average[start] = sum / K
            sum -= arr[start]
            start++
        }

    }
    return average
}

console.log(averageSubarrayOfSizeK(arr, K));