import { useState } from 'react'
import Post from './Post'
import './global.css'
import { Header } from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   <Header/>
   
   <div className='wrapper'></div>
    </div>
   
  )
}

export default App
