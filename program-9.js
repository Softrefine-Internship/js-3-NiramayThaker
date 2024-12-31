// Write a JavaScript program to generate all combinations of a string.

// Input: Dog 
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

let str = 'Dog'

const totalCombinations = (str) => {    
    let tStr = [...str];
    let result = [];

    for(let i = 0; i < tStr.length; i++){
        for(let j = i + 1; j <= tStr.length; j++){
            result.push(tStr.slice(i, j).join(''));
        }
    }

    return result;
}

const ans = totalCombinations(str)
console.log(ans);
