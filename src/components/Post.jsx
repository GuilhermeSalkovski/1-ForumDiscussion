import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/GuilhermeSalkovski.png" />

                    <div className={styles.authorInfo}>
                        <strong>Guilherme Salkovski</strong>
                        <span>Software Developer</span>
                    </div>
                </div>
                <time title="28 de maio de 2023 às 09:51h" dateTime="2023-05-28 09:51:32">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p> 
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#">guilherme.aloalo/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a> {' '}
                    <a href="#">#nlw</a> {' '}
                    <a href="#">#rocketseat</a> {' '}
                </p>  
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário"></textarea>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}