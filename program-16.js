// Write a JavaScript program to find intersection of two sets.

// Input: 
// let set1 = new Set([1, 2, 3, 4]);
// let set2 = new Set([3, 4, 5, 6]);

// Output: [3, 4]

let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([3, 4, 5, 6]);

let intersection = new Set([...set1].filter(x => set2.has(x)));
console.log(intersection);
