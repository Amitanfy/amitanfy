import Post from "@/components/Post";
import axios from "axios";
import { useEffect, useState } from "react";

export default function petPosts() {
  const [posts, setPosts] = useState([]);
  // const baseUrl = "https://amitanfy.onrender.com/";
  const baseUrl = "http://localhost:3030/";
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
  );
}
