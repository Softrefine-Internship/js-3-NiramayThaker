// Write a JavaScript program to check if obj1 contains all the property values of obj2.

// Example 1:
// Input: obj1: { name: "John", age: 23; degree: "CS" }, obj2: {age: 23, degree: "CS"}
// Output: true

// Example 2:
// Input: obj1: { name: "John", degree: "CS" }, obj2: {name: "Max", age: 23, degree: "CS"}
// Output: false

// True 
// let obj1 = { name: "John", age: 23, degree: "CS" };
// let obj2 = { age: 23, degree: "CS" };

// False 
let obj1 = { name: "John", degree: "CS" };
let obj2 = { name: "Max", age: 23, degree: "CS" };

const containsAllProperties = (obj1, obj2) => {
    for (let key in obj2) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true
}

console.log(containsAllProperties(obj1, obj2));  
