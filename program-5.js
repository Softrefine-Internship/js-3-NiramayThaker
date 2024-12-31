// Write a JavaScript program to count number of occurrences of repeated names in an array of objects.

// Input:  
// arr = [
//     {
//        employeeName: "Ram",
//        employeeId: 23
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 24
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 21
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 25
//     },
//     {
//        employeeName: "Kisan",
//        employeeId: 22
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 20
//     }
//  ]

// Output: 
// [
//     {employeeName: "Ram", occurrences: 3},
//     {employeeName: "Shyam", occurrences: 2},
//     {employeeName: "Kisan", occurrences:  1}
// ] 

let arr = [
    {
       employeeName: "Ram",
       employeeId: 23
    },
    {
        employeeName: "Ram",
        employeeId: 21
    },
    {
       employeeName: "Shyam",
       employeeId: 24
    },
    {
       employeeName: "Ram",
       employeeId: 25
    },
    {
       employeeName: "Kisan",
       employeeId: 22
    },
    {
       employeeName: "Shyam",
       employeeId: 20
    }
]

const checkOccurence = (arr) => {
    occCount = []
    
    for (const i in arr) {

        if(occCount.some((e) => e.employeeName === arr[i]['employeeName']))
            occCount.find((e) => e.employeeName === arr[i]['employeeName'])['occurrences']++;
        else 
            occCount.push({'employeeName': arr[i]['employeeName'], 'occurrences': 1});        
    }
    
    return occCount
}

let ans = checkOccurence(arr);
console.log(ans);
