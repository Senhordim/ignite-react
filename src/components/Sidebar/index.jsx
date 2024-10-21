import { PencilLine } from "@phosphor-icons/react";

import styles from './Sidebar.module.css'
import Avatar from "../Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        
        <div className={styles.profile}>
            <div className={styles.avatar}>
                <Avatar 
                    src='https://avatars.githubusercontent.com/u/212854?v=4'
                />
            </div>
            
            <strong>Diego Collares</strong>
            <span>Web Developer</span>
        </div>
        <footer>
            <a href="#">
                <PencilLine size={16} />
                Editar o seu perfil
            </a>
        </footer>
    </aside>
  )
}
