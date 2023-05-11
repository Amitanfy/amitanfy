import styles from "../../styles/pages/MainAdvice.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function MainAdvice(props) {
  const [advice, setAdvice] = useState(null);
  const baseUrl = "http://localhost:3030";
  const router = useRouter();
  const { param } = router.query;

  useEffect(() => {
    if (router.isReady) {
      console.log(baseUrl + "/AdvicePost/" + param);
      axios
        .get(baseUrl + "/AdvicePost/" + param)
        .then((res) => {
          setAdvice(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  if (router.isReady && advice) {
    return (
      <div className={styles.container}>
        <Navbar />
        <div className={styles.main}>
          <div className={styles.title}>{advice[0].title}</div>
          <div className={styles.text}>{advice[0].text}</div>
        </div>
        <Footer />
      </div>
    );
  }
}
