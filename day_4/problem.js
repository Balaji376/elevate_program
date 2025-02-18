

//Write a function that takes an array of numbers and returns both the sum and product of its elements using a single iteration (i.e., without using multiple loops or multiple reduce calls).

//Input:
let arr=[1, 2, 3, 4]


let sum=0;

let product=1;

for(let i=0; i<arr.length; i++){
    sum+=arr[i]
    product*=arr[i]
}
console.log(sum,product)

// Output:
// { sum: 10, product: 24 }
