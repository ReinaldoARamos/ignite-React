import { useState } from 'react'
import {Post} from './components/Post'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import {Comment} from './components/Comment'

import styles from './App.module.css'
import './global.css'

/*
author: {avatar_url: "", name: "" , role: ""}
publishedAt: Date
content: String
*/ 
const post = [
  {
    author:{
      avatarUrl: 'https://github.com/ReinaldoARamos.png',
      name: "Reinaldo Ramos",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Esse é o tal jogo que é melhor que o god of war 4'},
      {type: 'paragraph', content: 'de usuário para ter uma ideia de como fazer um orçamento'},
      {type: 'paragraph', content: 'Para limpar o nome da empresa para que eu possa fazer um novo anuncio'}
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  },
]
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
