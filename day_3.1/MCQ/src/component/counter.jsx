


import React, { useState } from 'react'

const Counter = () => {

    let [count ,setCount]=useState(0)

    const handleIncrement=()=>{
        setCount((prev)=>prev+1)
    }
    const handleDecrement=()=>{
        setCount((prev)=>prev-1)
    }
  return (
    <>
   <h1>Counter :{count}</h1>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default Counter