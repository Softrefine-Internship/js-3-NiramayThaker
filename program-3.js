// Write a JavaScript program to flatten object into single depth object.

// Input: 
// obj = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };

// Output: 
// obj = {
//     Company: 'GeeksforGeeks',
//     Address: 'Noida',
//     contact: -999999908,
//     'mentor.HTML': 'GFG',
//     'mentor.CSS': 'GFG',
//     'mentor.JavaScript': 'GFG'
// }


function flattenObject(obj, parentKey = '') {
    return Object.keys(obj).reduce((acc, key) => {
        const prefixedKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof obj[key] === 'object') {
            Object.assign(acc, flattenObject(obj[key], prefixedKey));
        } else {
            acc[prefixedKey] = obj[key];
        }
        return acc;
    }, {});
}

const obj = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91-999999999,
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG"
    }
};

console.log(flattenObject(obj));
