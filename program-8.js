// Write a JavaScript program to calculate the total value of a specific property in an array of objects.

// Input:  
// arr = [
//     {
//         product: "Laptop",
//         price: 1000,
//         quantity: 2,
//     },
//     {
//         product: "Phone",
//         price: 600,
//         quantity: 3,
//     },
//     {
//         product: "Monitor",
//         price: 250,
//         quantity: 1,
//     },
// ]

// Output: 
// total value for "price": 1850
// total value for "quantity": 6

let arr = [
    {
        product: "Laptop",
        price: 1000,
        quantity: 2,
    },
    {
        product: "Phone",
        price: 600,
        quantity: 3,
    },
    {
        product: "Monitor",
        price: 250,
        quantity: 1,
    },
]

const calcProperty = (arr) => {
    let qSum = 0;
    arr.forEach(element => {qSum += element.quantity;});

    return qSum;
}

console.log(calcProperty(arr));