function removeDuplicates(arr) {
    const seen = new Set();
    return arr.filter(item => {
        if (seen.has(item)) return false;
        seen.add(item);
        return true;
    });
}

// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 3, 5, 1]));
// Output: [1, 2, 3, 4, 5]
