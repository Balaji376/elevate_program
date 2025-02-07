

import React, { useRef, useState } from 'react'

const Timer = () => {

    const [show,setshow]=useState(5)

    const intervalId=useRef(null)

    const handleStart=()=>{
        intervalId.current=setInterval(()=>{
            if(show >0){
                setshow((prev)=>prev-1)
            }
           
                
            
        },1000)

    }
    const handleStop=()=>{
        clearInterval(intervalId.current)
    }
  return (
   <>
   <h3>StartTest :{show}</h3>
   <button onClick={handleStart}>Start</button>
   <button onClick={handleStop}>End</button>
 

   
   </>
  )
}

export default Timer