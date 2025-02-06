

import React, { useRef, useState } from 'react'

const Timer = () => {
    let [timer, setTimer]=useState(0)

    let timerId=useRef(null)

    const handleStart=()=>{
        timerId.current=setInterval(()=>{
            setTimer((prev)=>prev+1)
        },1000)
    }
 
    const handleStop=()=>{
        clearInterval(timerId.current)
    }

    const handleReset=()=>{
        clearInterval(timerId.current)
        setTimer(0)
    }
  return (
    <div>
        <h1>Timer :{timer}</h1>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default Timer