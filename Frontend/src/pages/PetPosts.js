import axios from "axios";
import { useEffect, useState } from "react";

export default function petPosts() {
  const [posts, setPosts] = useState([]);
  const baseurl = "http://localhost:3030/";
  useEffect(() => {
    axios
      .get(baseurl + "PetPosts")
      .then((res) => {
        console.log(res);
        const arr = [];
        for (let i = 0; i < res.data.length; i++) arr[i] = res.data[i];
        setPosts(arr);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {posts.map((x, i) => {
        const reader = new FileReader();
        const b64 = Buffer.from(x.image.data.data).toString("base64");
        const mimeType = "image/jpeg";
        return <img src={`data:${mimeType};base64,${b64}`}></img>;
      })}
    </div>
  );
}
