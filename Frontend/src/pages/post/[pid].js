import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export default function Post() {
  const router = useRouter();
  const [post, setPost] = useState();
  const baseurl = "http://localhost:3030/";
  useEffect(() => {
    if (router.isReady) {
      const { pid } = router.query;
      axios
        .get(baseurl + "PetPost/" + pid)
        .then((res) => {
          setPost(res.data[0]);
          console.log(res.data[0].data[0].data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  // const thumbnail = Buffer.from(post.data[0].data).toString("base64");
  // const mimeType = "image/jpeg";

  // return <img src={`data:${mimeType};base64,${thumbnail}`}></img>;
}
