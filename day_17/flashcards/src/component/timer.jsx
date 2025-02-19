

import React, { useState } from 'react'

const Timer = () => {

    const[Timer, setTimer]=useState(0)

    const intevalRef=useRef('')

    let id;

    const handleStart =()=>{

         id= setInterval(()=>{
            setTimer((prev=>prev+1))
        },1000)
    }

    const handleStop =()=>{

        clearInterval(id)
    }
  return (
   <>
   <button onClick={handleStart}>start</button>
   <button onClick={handleStop}>stop</button>
   </>
  )
}

export default Timer