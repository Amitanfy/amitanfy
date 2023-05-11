import styles from "../styles/components/Catdog.module.css";
import { Router, useRouter } from "next/router";

export default function CatDog(props) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push("/PetPosts");
      }}
      className={styles.container}
    >
      <div className={styles.icon}>{props.icon}</div>
      <div>
        <div>{props.text}</div>
      </div>
    </div>
  );
}
