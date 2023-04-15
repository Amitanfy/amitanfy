import axios from "axios";
import { useEffect, useState } from "react";

export default function PostPet() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const baseurl = "http://localhost:3030/";

  useEffect(() => {}, [image]);

  const handleclick = () => {
    if (image === null) return;
    var bodyFormData = new FormData();
    bodyFormData.append("name", "textimage");
    bodyFormData.append("text", text);
    bodyFormData.append("testImage", image);
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
          setImage(e.target.files[0]);
        }}
        type="file"
      />
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="text"
      />
      <button onClick={handleclick}>upload</button>
    </div>
  );
}
