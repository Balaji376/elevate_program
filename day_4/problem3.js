// Input:
let arr1=["apple", "banana", "apple", "orange", "banana", "banana"]
let arr2=[1, 2, 2, 3, 3]
function maxFrequency(arr){

    let obj={}

    for(let i=0; i<arr.length; i++){

        if(obj[arr[i]]===undefined){
            obj[arr[i]]=1
        }else{
            obj[arr[i]]++;
        }
    }
    let Max=-Infinity
  
    for(let key in obj){
        
        if(obj[key] > Max){
            Max=obj[key]
            
        }
        
       
    }
   let res=[]
   for(let key in obj){
    if(obj[key] ===Max){
        res.push(key)
    }
   }
console.log(res.join(' '))
}

maxFrequency(arr1)
maxFrequency(arr2)

// Output:
// ["banana"]
