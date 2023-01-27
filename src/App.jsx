import { useState } from 'react'
import Post from './Post'
import './global.css'
import { Header } from './components/Header'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   <Header/>
   
   <div className={styles.wrapper}>
    <Sidebar/>
    <main>
      <Post 
      author="reinaldo"
      content="Edudeeeee"
      />
        <Post 
      author="Darui"
      content="Eploucas"
      />
    </main>
   </div>
    </div>
   
  )
}

export default App
