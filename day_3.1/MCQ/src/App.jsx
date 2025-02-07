import { useState } from 'react'


import './App.css'

import ShowMcq from './component/showMeq'
import Timer from './component/time'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <ShowMcq/>
   
   </>
  )
}

export default App
