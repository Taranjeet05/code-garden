function sumOfEvens(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            sum += nums[i];
        }
    }
    return sum;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6];
console.log(sumOfEvens(arr)); // Output: 12