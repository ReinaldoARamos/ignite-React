import { useState } from 'react'
import {Post} from './components/Post'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import {Comment} from './components/Comment'

import styles from './App.module.css'
import './global.css'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   <Header/>
   
   <div className={styles.wrapper}>
    <Sidebar/>
    <main>
      <Post />
      <Post />
     
    </main>
   
   </div>
    </div>
   
  )
}

export default App
