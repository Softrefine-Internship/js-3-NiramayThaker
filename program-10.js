// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"

let str = "This is a demo String find the largest word from it" 

const findLongestWord = (inpStr) => {
    let strCnt = 0
    let splitStr = inpStr.split(' ')
    
    splitStr.forEach(ele => {
        if(ele.length > strCnt) {
            strCnt = ele.length;
        }
    });

    return strCnt;
}

let ans = findLongestStr(str);
console.log(ans);
