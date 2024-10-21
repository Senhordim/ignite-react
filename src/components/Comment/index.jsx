import { Trash, HandsClapping, ThumbsUp } from "@phosphor-icons/react";

import Avatar from '../Avatar';
import styles from './Comment.module.css';

export default function Comment() {
  return (
    <footer className={styles.comment}>
        <Avatar 
            src="https://avatars.githubusercontent.com/u/212854?v=4"
            border={false}
        />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <div className={styles.commentHeader}>
                    <div className={styles.commentInfo}>
                        <strong>Diego Collares</strong>
                        <span><time 
                            title='19 de Outubro de 2024 as 08:14' 
                            dateTime="2024-19-10 08:14:30"
                        >Cerca de 2h</time></span>
                    </div>
                    <button title="Deletar comentário" className={styles.commentDeleteIcon}>
                        <Trash size={24} />
                    </button>
                </div>
                <p>Muito bom Devon, parabéns!! 👏👏</p>
            </div>
            <footer className={styles.commentActions}>
                <button>
                    <ThumbsUp size={20} /> Aplaudir  <span>20</span>
                </button>
            </footer>
        </div>
    </footer>
  )
}
