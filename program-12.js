// Write a JavaScript program to get the longest string in an array.

// Input:  
// arr = [
//     "JavaScript",
//     "Python",
//     "Java",
//     "C++",
//     "Ruby",
//     "Swift",
// ]

// Output: "JavaScript"

let arr = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Swift",
]

const findLongestStr = (ele) => {
    let eleCnt = 0 

    ele.forEach(e => {
        if(eleCnt < e.length)
            eleCnt = e.length;
    });

    return eleCnt;
}

let ans = findLongestStr(arr);
console.log(ans);