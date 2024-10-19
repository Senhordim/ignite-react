import Avatar from '../Avatar'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar 
                    src='https://avatars.githubusercontent.com/u/212854?v=4' 
                />
                <div className={styles.authorInfo}>
                    <strong>Diego Collares</strong>
                    <span>Web Developer</span>
                </div>
            </div>
            <time 
                title='19 de Outubro de 2024 as 08:14' 
                dateTime="2024-19-10 08:14:30"
            >
                Publicado a 1h atrás
            </time>
        </header>

        <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. 
                O nome do projeto é DoctorCare 🚀</p>

            <p>👉 {''}<a href="#">jane.design/doctorcare</a></p>

            <p>
                <a href="#">#novoprojeto</a>{' '}
                <a href="#">#nlw</a>{' '}
                <a href="#">#rocketseat</a>
            </p>
        </div>
    </article>
  )
}
