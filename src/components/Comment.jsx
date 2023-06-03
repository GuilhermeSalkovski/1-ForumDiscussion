import {  ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/maykbrito.png"  />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Guilherme Salkovski</strong>
                            <time title="28 de maio de 2023 às 09:51h" dateTime="2023-05-28 09:51:32">Cerca de 1h atrás</time>
                        </div>
                        
                        <button title="Deletar um comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom, Guilherme! Parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}