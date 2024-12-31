// Write a JavaScript program to modify an object’s property in an array of objects.

// Input:  
// arr = [
//     {
//         employee_id: 1,
//         employee_name: "Aman",
//     },
//     {
//         employee_id: 2,
//         employee_name: "Bhargava",
//     },
//     {
//         employee_id: 3,
//         employee_name: "Chaitanya",
//     },
//  ]

// Output: 
// [
//     { employee_id: 1, employee_name: 'Aman' },
//     { employee_id: 2, employee_name: 'Rahul' },
//     { employee_id: 3, employee_name: 'Chaitanya' }
// ] 

let arr = [
    {
        employee_id: 1,
        employee_name: "Aman",
    },
    {
        employee_id: 2,
        employee_name: "Bhargava",
    },
    {
        employee_id: 3,
        employee_name: "Chaitanya",
    },
]

const changeProperty = (arr, id, change) => {
    arr.find((ele) => ele.employee_id === id).employee_name = change;
    return arr
}

const ans = changeProperty(arr, 2, 'Rahul');
console.log(arr);
