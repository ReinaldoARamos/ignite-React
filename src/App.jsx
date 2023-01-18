import { useState } from 'react'
import Post from './Post'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
       <h1>ello</h1>
   <Post />
    </div>
   
  )
}

export default App
