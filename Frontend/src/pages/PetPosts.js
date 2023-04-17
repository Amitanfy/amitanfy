import axios from "axios";
import { useEffect, useState } from "react";

export default function petPosts(){
    const [posts,setPosts] = useState([]);
    const baseurl = "http://localhost:3030/"
    useEffect(()=>{
        axios.get(baseurl + "PetPosts")
        .then((res)=>{
            console.log(res)
            const arr = [];
            for(let i=0;i<res.data.length;i++) arr[i]=res.data[i];
            setPosts(arr);
        })
        .catch((err)=>console.log(err))
    },[])


    return(
       <div>
        {posts.map((x,i)=>{
            const reader = new FileReader();
            // reader.readAsDataURL(posts[0].image.data[0]);
            console.log(new File([1,2,3],'ay',{
                type: "image/jpeg",
                size: 12
            }))
            return(
                <img key={x._id+i} >{x._id}</img>
            )
        }
        )}
       </div>
    )
}