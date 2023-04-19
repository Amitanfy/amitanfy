import Post from "@/components/Post";
import axios from "axios";
import { useEffect, useState } from "react";

export default function petPosts() {
  const [posts, setPosts] = useState([]);
  const baseurl = "http://localhost:3030/";
  useEffect(() => {
    axios
      .get(baseurl + "PetPosts")
      .then((res) => {
        console.log(res.data[0]);
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
        return <Post img={`data:${mimeType};base64,${thumbnail}`} name={x.text} type={x.type} breed = {x.breed}/>
      })}
    </div>
  );
}
