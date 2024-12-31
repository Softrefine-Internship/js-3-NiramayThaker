let str1 = "eleven plus two";
let str2 = "twelve plus one";


const splitStr = (s) => {
    return s.replace(/\s+/g, '').split('').sort().join('');
}

const checkAnagram = (s1, s2) => {
    return splitStr(s1) === splitStr(s2);
}

console.log(checkAnagram(str1, str2)); 
