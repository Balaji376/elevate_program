


import React, { useState } from 'react'

const Todo = () => {

    const [title, setTitle]=useState('')

    const [desc, setDes]=useState('')

    function handleTitle(e){
      
      console.log(e)

    }

  return (
   <>
   
   <input type='text' placeholder='Enter Your title here' onChange={handleTitle}/>
   <input type='text' placeholder='Enter Your description here..'/>
   <button>Submit</button>
   </>
  )
}

export default Todo