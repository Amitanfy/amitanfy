import { Router, useRouter } from "next/router";
import styles from "../styles/components/advice.module.css";

export default function Advice(props) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/advice/" + props.id);
      }}
      className={styles.container}
    >
      <div className={styles.title}>{props.title}</div>
    </div>
  );
}
