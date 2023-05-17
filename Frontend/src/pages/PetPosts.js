import Navbar from "@/components/Navbar";
import Post from "@/components/Post";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/pages/Petposts.module.css"

export default function petPosts() {
  const [posts, setPosts] = useState([]);
  const baseUrl = process.env.API_KEY;
  useEffect(() => {
    axios
      .get(baseUrl + "PetPosts")
      .then((res) => {
        const arr = [];
        for (let i = 0; i < res.data.length; i++) arr[i] = res.data[i];
        setPosts(arr);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar/>
      <div className={styles.mainframe}>
        <div className={styles.posts}>
          {posts.map((x, i) => {
            const reader = new FileReader();
            const thumbnail = Buffer.from(x.data[0]).toString("base64");
            const mimeType = "image/jpeg";
            return (
              <Post
                key={x._id}
                id={x._id}
                img={`data:${mimeType};base64,${thumbnail}`}
                name={x.name}
                type={x.type}
                breed={x.breed}
              />
            );
          })}
      </div>
      </div>
    </div>
  );
}
