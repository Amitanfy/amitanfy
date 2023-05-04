import styles from "../styles/components/Post.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useContext, useState } from "react";
import { UserContext } from "@/common/userContext";
import { useRouter } from "next/router";

export default function Post(props) {
  const { user, token } = useContext(UserContext);
  const [liked, SetLiked] = useState(false);

  const router = useRouter();
  const handleClick = (route) => {
    console.log("asd");
    router.push(`/post/${route}`);
  };
  return (
    <div
      onClick={() => {
        handleClick(props.id);
      }}
      className={styles.body}
    >
      <div
        className={styles.like}
        onClick={() => {
          SetLiked(!liked);
        }}
      >
        {liked ? <AiFillHeart /> : <AiOutlineHeart />}
      </div>
      <img className={styles.pic} src={props.img} />
      <div className={styles.filler}></div>
      <div className={styles.about}>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.options}>{props.type + " | " + props.breed}</p>
      </div>
    </div>
  );
}