import Post from "@/components/Post";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PetPosts(){
    const router = useRouter();
    const baseUrl = process.env.API_KEY;
    const [type,setType] = useState(null);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const { type } = router.query
        axios
          .get(baseUrl + "PetPosts/" + type)
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