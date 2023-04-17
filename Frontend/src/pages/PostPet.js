import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/pages/Postpet.module.css"

export default function PostPet() {
  const [file,setFile] = useState([]);
  const [image, setImage] = useState([]);
  const [text, setText] = useState("");
  const baseurl = "http://localhost:3030/";



  const handleclick = () => {
    if (image === null) return;
    var bodyFormData = new FormData();
    bodyFormData.append("name", "textimage");
    bodyFormData.append("text", text);
    for ( const files of file) bodyFormData.append("testImage", files);
    axios({
      method: "post",
      url: baseurl + "PostPet",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        onChange={(e) => {
          for(let i = 0;i < e.target.files.length;i++){
            const reader = new FileReader();
            console.log(e.target.files[i])
            setFile((prev)=>[...prev, e.target.files[i]]);
            reader.readAsDataURL(e.target.files[i]);
            reader.onload = () =>{
              setImage((prev)=>[...prev, reader.result]);
              reader.abort()
            }
          }
        }}
        type="file"
        multiple
      />
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="text"
      />
      <button onClick={handleclick}>upload</button>
      {image.map((x,i)=><img key={x} className={styles.previewpics} src={x}></img>)}
    </div>
  );
}
