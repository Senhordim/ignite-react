import './styles/global.css'
import styles from './App.module.css' 

import Header from './components/header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

export function App() {
  return (
    <>
        <Header />
        <div className={styles.wrapper}>
         <Sidebar />
         <main>
            <Post />
            <Post />
            <Post />
         </main>
        </div>
    </>
  )
}
