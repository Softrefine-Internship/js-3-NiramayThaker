// Write a JavaScript program to convert two-dimensional array in to an object.

// Input:  [
//     ["John", 12],
//     ["Jack", 13],
//     ["Matt", 14],
//     ["Maxx", 15]
// ]

// Output: {
//     "John": 12,
//     "Jack": 13,
//     "Matt": 14,
//     "Maxx": 15
// }


let arr = [
    ["John", 12],
    ["Jack", 13],
    ["Matt", 14],
    ["Maxx", 15]
]

let arrToObj = {}

arr.forEach(element => {
    arrToObj[element[0]] = element[1];
});

console.log(arrToObj);