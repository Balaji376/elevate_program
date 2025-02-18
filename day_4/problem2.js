// Input:
let arr=["HeLLo", "world", "PYTHON", "JaVaScRiPt"]


function lowerToUpperAndUppertoLower(arr){

    arr.map((ele)=>{

        let lower=0;

        let Upper=0;

        for(let ch in ele){

            if(ch >= "A"  && ch <= 'Z'){
                Upper++;
            }
            if(ch >= 'a' && ch <= 'z'){
                lower++;
            }
        }
        if(lower > Upper){
            return ch.toLowerCase()
        }else if(Upper < lower){
            return ch.toUpperCase()
        }
        return ch
    })




}



lowerToUpperAndUppertoLower(str)
// Output:
// ["hello", "WORLD", "python", "JaVaScRiPt"]
