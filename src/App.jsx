
import Header from './components/header'
import { Post } from './features/Post'

import './styles/global.css'

import styles from './App.module.css' 
import { Sidebar } from './components/Sidebar'


export function App() {

  return (
    <>
        <Header />
        <div className={styles.wrapper}>
         <Sidebar />
         <main>
            <Post title="Apenas um título" description="apenas uma descrição de texto etc" />
         </main>
        </div>
    </>
  )
}
