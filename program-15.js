// Write a JavaScript program to check subset.

// Example 1:
// Input: 
// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([3, 4]);

// Output: false


// Example 2:
// Input: 
// let set1 = new Set([3, 4]);
// let set2 = new Set([1, 2, 3, 4, 5]);

// Output: true


let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([3, 4]);

let isSubset = true;
set2.forEach((value) => {
    if (!set1.has(value)) {
        isSubset = false;
    }
});

console.log(isSubset);
