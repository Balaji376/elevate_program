import React, { useEffect, useState } from 'react'

const FetchData = () => {

    let [Fdata, setData]=useState([])

    async function fetchData(){
        try{

            let res=await fetch('https://dummyjson.com/products?limit=10')

            let data=await res.json()
           

         

           console.log(data.products)
           setData(data.products)
               
        }catch(er){
            console.log('failed to fetch data')
        }
    }

    const fetchingDataUsingButton =()=>{

        // fetchData()
        useEffect(()=>{
       fetchData()
        },[])
    }

   
  return (
   <>
 <h1>Fetching Data</h1>
 <button onClick={fetchingDataUsingButton}>fetchData</button>

 {
    Fdata.map((ele,id)=>{
        return (
            <div key={id}>
                <h3>Title :{ele.title}</h3>
                <p>category:{ele.category}</p>
                <p>price :{ele.price}</p>
            </div>
        )
    })
 }
   </>
  )
}

export default FetchData