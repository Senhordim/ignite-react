import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import Avatar from '../Avatar'
import Comment from '../Comment'
import styles from './Post.module.css'

export function Post({ author, content, published }) {
  // const publishedDateFormated = format(
  //   published, "d 'de' LLLL 'as' HH:mm'h'", {
  //     locale: ptBR
  // });

  // const publishedDateRelativeToNow = formatDistanceToNow(published, {
  //   locale: ptBR,
  //   addSuffix: true
  // })

  return (
    <article className={styles.post}>
        <header>
          <div className={styles.author}>
              <Avatar
                  src={author.avatarUrl}
              />
              <div className={styles.authorInfo}>
                  <strong>{author.name}</strong>
                  <span>{author.role}</span>
              </div>
          </div>
          <time
            title={'publishedDateFormated'}
            dateTime={'publishedDateRelativeToNow'}
          >
            {/* {publishedDateRelativeToNow} */}
          </time>
      </header>

        <div className={styles.content}>
            {
              content.map((item, index) => {
                if (item.type === 'paragraph') {
                  return <p key={index}>{item.content}</p>
                }

                if (item.type === 'link') {
                  return (
                    <>
                      <a href={item.content} key={index}>{item.content}</a><br />
                    </>
                  )
                }

                if (item.type === 'hashtags') {
                  return item.content.map((hashtag, index) => (
                   <>
                     <a href="#" key={index}>{hashtag}</a>{' '}
                   </>
                  ))
                }

                return null
              })
            }
        </div>


        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea
                placeholder='Comente algo sobre esse post'
                name='comment'
            ></textarea>
            <footer>
                <button type='submit'>Comentar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>


    </article>
  )
}
