import styles from "../styles/components/Post.module.css"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { useState } from "react"
export default function Post(props) {
    const [liked, SetLiked] = useState(false);
    return (
        <div className={styles.body}>
                <div className={styles.like} onClick={() => { SetLiked(!liked) }}>
                    {liked ? <AiFillHeart /> : <AiOutlineHeart />}
                </div>
            <img className={styles.pic} src={props.img} />
            <div className={styles.filler}></div>
            <div className={styles.about}>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.options}>{props.type + " || " + props.breed}</p>
            </div>
        </div>
    )
}
