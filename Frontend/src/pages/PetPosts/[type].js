import Navbar from "@/components/Navbar";
import Post from "@/components/Post";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/pages/PetPosts.module.css"
import Footer from "@/components/Footer";

export default function PetPosts(){
    const router = useRouter();
    const baseUrl = process.env.API_KEY;
    const [type,setType] = useState(null);
    const [posts, setPosts] = useState([]);
    const [page,setPage] = useState(1);
    useEffect(() => {
        const { type } = router.query
        axios
          .get(baseUrl + "PetPosts/" + type + "?page=" + page)
          .then((res) => {
            const arr = [];
            for (let i = 0; i < res.data.length; i++) arr[i] = res.data[i];
            setPosts(arr);
          })
          .catch((err) => console.log(err));
      }, [page]);

    return (
      <div>
      <Navbar/>
      <div className={styles.main}>
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
        <button onClick={()=>{setPage(page+1)}} className={styles.loadmore}>Load More</button>
        </div>
        <Footer/>
        </div>
      );

}