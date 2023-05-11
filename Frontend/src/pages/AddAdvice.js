import axios from "axios";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/pages/AddAdvice.module.css";
import { client } from "../client/index";
import { Router, useRouter } from "next/router";

export default function AddAdvice() {
  const [advices, setAdvices] = useState(null);
  const baseUrl = "http://localhost:3030/";
  const router = useRouter();
  const titleref = useRef();
  const textref = useRef();
  useEffect(() => {
    axios
      .get(baseUrl + "/advicePosts")
      .then((res) => {
        setAdvices(res.data);
      })
      .catch((err) => console.log(err));
  });
  const AddAdvice = () => {
    if (titleref.current.value) {
      client
        .post("/postAdvice", {
          title: titleref.current.value,
          text: textref.current.value,
        })
        .then((res) => {
          console.log(res.data);
          router.push("http://localhost:3000/");
        });
    } else {
      console.log("title or text is empty");
    }
  };
  return (
    <div className={styles.outer}>
      addAdvice
      <input placeholder="title" ref={titleref}></input>
      <input placeholder="text" ref={textref}></input>
      <button onClick={AddAdvice}>Add advice</button>
    </div>
  );
}
