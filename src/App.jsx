import './styles/global.css'
import styles from './App.module.css'

import Header from './components/header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
    {
        id: 1,
        author: {
          name: 'Diego Collares',
          avatarUrl: 'https://avatars.githubusercontent.com/u/212854?v=4',
          role: 'CTO @Startamus'
        },
        content: [
          {
            type: 'paragraph',
            content: 'Fala galeraa 👋'
          },
          {
            type: 'paragraph',
            content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.'
          },
          {
            type: 'paragraph',
            content: 'O nome do projeto é DoctorCare 🚀',
          },
          {
            type: 'link',
            content: '👉 jane.design/doctorcare',
          },

          {
            type: 'hashtags',
            content: ['#novoprojeto', '#nlw', '#rocketseat'],
          },
        ],
        publishedAt: new Date('2024-19-10 08:14:30'),
    },
    {
      id: 2,
      author: {
        name: 'Nelio Alves',
        avatarUrl: 'https://avatars.githubusercontent.com/u/212854?v=4',
        role: 'Educator @Startamus'
      },
      content: [
        {
          type: 'paragraph',
          content: 'Fala galeraa 👋'
        },
        {
          type: 'paragraph',
          content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.'
        },
        {
          type: 'paragraph',
          content: 'O nome do projeto é DoctorCare 🚀',
        },
        {
          type: 'link',
          content: '👉 jane.design/doctorcare',
        },
        {
          type: 'hashtags',
          content: ['#novoprojeto', '#nlw', '#rocketseat'],
        },
      ],
      publishedAt: new Date('2024-18-10 20:00:00'),
  },

  ]

export function App() {
  return (
    <>
        <Header />
        <div className={styles.wrapper}>
         <Sidebar />
         <main>
            {posts.map(post => (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))}
         </main>
        </div>
    </>
  )
}
