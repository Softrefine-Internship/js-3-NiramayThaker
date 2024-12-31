// Write a JavaScript program to count frequency of character in string.

// Input: "hello"
// Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }


let str = "hello";

const countFrequency = (str) => {
    let freq = {};
    for (let i = 0; i < str.length; i++) {
        if (freq[str[i]]) {
            freq[str[i]]++;
        } else {
            freq[str[i]] = 1;
        }
    }
    return freq;
}

let ans = countFrequency(str);
console.log(ans);
