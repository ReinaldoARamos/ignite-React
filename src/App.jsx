import { useState } from 'react'
import Post from './Post'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   <Post 
   author= "Reinaldo"
   content = "EBaaaaaaaaaa"
/>
    </div>
   
  )
}

export default App
