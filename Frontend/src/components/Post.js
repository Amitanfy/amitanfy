import styles from "../styles/components/Post.module.css"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { useState } from "react"
export default function Post() {
    const name = "Jason";
    const [liked, SetLiked] = useState(false);
    return (
        <div className={styles.body}>
                <div className={styles.like} onClick={() => { SetLiked(!liked) }}>
                    {liked ? <AiFillHeart /> : <AiOutlineHeart />}
                </div>
            <img className={styles.pic} src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" />
            <div className={styles.filler}></div>
            <div className={styles.about}>
                <p className={styles.name}>{name}</p>
                <p className={styles.options}>pug || puppy</p>
            </div>
        </div>
    )
}
