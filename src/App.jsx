import { useState } from 'react'
import Post from './Post'
import './App.css'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   <Header/>
   <Post 
   author= "Reinaldo"
   content = "EBaaaaaaaaaa"
/>
    </div>
   
  )
}

export default App
