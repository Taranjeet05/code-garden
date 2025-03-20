/* Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

 

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
 

Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109
fn returns an integer.  */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
1. 1089. Duplicate Zeros
Problem:
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right. Do it in-place and without using extra space.

Example:
Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]

2. 66. Plus One
Problem:
Given a non-empty array of digits representing a non-negative integer, increment the integer by one and return the resulting array of digits. You must not use any extra space other than the input array.

Example:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The integer is 123, and we increment it by 1, giving 124.

3. 1920. Build Array from Permutation
Problem:
Given a zero-based permutation nums of length n, return an array result where result[i] = nums[nums[i]] for every index i in the array.

Example:
Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]
Explanation: For the first element, nums[nums[0]] = nums[0] = 0, and similarly for the rest of the array.

4. 1480. Running Sum of 1d Array
Problem:
Given an array nums, return a new array where each element is the sum of all elements before it (including itself).

Example:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: The running sum is calculated as follows:

1
1 + 2 = 3
1 + 2 + 3 = 6
1 + 2 + 3 + 4 = 10
5. 724. Find Pivot Index
Problem:
Given an array of integers, find the pivot index where the sum of the numbers to the left of the pivot is equal to the sum of the numbers to the right of the pivot. Return -1 if there is no pivot index.

Example:
Input: nums = [1, 7, 3, 6, 5, 6]
Output: 3
Explanation: The pivot index is 3 because:

The sum of the elements to the left of index 3 is 1 + 7 + 3 = 11.
The sum of the elements to the right of index 3 is 5 + 6 = 11.
6. 26. Remove Duplicates from Sorted Array
Problem:
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and return the new length. Do not allocate extra space for another array.

Example:
Input: nums = [1,1,2]
Output: 2
Explanation: Your function should return 2, with the first two elements of nums being 1 and 2. It doesn’t matter what you leave beyond the new length.

7. 283. Move Zeroes
Problem:
Given an array nums, move all zeros to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

8. 941. Valid Mountain Array
Problem:
Given an array of integers, return true if the array is a mountain array or false otherwise. A mountain array is an array where:

It must have at least 3 elements.
There must be a peak element where the values strictly increase and then strictly decrease.
Example:
Input: arr = [2,1]
Output: false

9. 121. Best Time to Buy and Sell Stock
Problem:
You are given an array where the element at i is the price of a given stock on day i. You want to find the maximum profit you can achieve by buying and selling the stock once.

Example:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6). Profit = 6 - 1 = 5.

10. 14. Longest Common Prefix
Problem:
Write a function to find the longest common prefix string amongst an array of strings.

Example:
Input: strs = ["flower", "flow", "flight"]
Output: "fl"
Explanation: The longest common prefix is "fl".

By solving these problems, you'll get more comfortable with iterating through arrays, applying transformations, and solving a variety of array-related challenges.

Tip: Try not to use the built-in methods like .map(), .filter(), or .reduce() initially to get better at solving problems manually. This will help you improve your understanding of how these functions actually work under the hood.



*/

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: "olleh"

function isPalandrome(str) {
  return str === str.split("").reverse().join("");
}

console.log("madam");
