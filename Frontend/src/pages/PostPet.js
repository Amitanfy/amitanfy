import { UserContext } from "@/common/userContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styles from "../styles/pages/Postpet.module.css";

export default function PostPet() {
  const { decoded } = useContext(UserContext);
  const [file, setFile] = useState([]);
  const [image, setImage] = useState([]);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState(null);
  const [breeds, setBreeds] = useState(null);
  const [breed, setBreed] = useState(null);
  const baseurl = "https://amitanfy.onrender.com/";

  const handleclick = () => {
    console.log(decoded);
    if (image === null) return;
    var bodyFormData = new FormData();
    bodyFormData.append("authorId", decoded.uid);
    bodyFormData.append("name", name);
    bodyFormData.append("type", type);
    bodyFormData.append("breed", breed);
    bodyFormData.append("text", text);
    for (const files of file) bodyFormData.append("testImage", files);
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

  const handleDog = () => {
    setType("dog");
    axios
      .get("https://api.thedogapi.com/v1/breeds/")
      .then((res) => console.log(setBreeds(res.data)));
  };

  return (
    <div>
      {!breeds ? (
        <div className={styles.backdrop}>
          <div>cat</div>
          <div onClick={handleDog}>dog</div>
        </div>
      ) : !breed ? (
        breeds.map((x, i) => {
          return (
            <div
              key={x.name}
              onClick={() => {
                setBreed(x.name);
              }}
            >
              {x.name}
            </div>
          );
        })
      ) : !name ? (
        <>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="name"
          ></input>
          <button>submit</button>
        </>
      ) : image.length === 0 ? (
        <input
          onChange={(e) => {
            for (let i = 0; i < e.target.files.length; i++) {
              const reader = new FileReader();
              console.log(e.target.files[i]);
              setFile((prev) => [...prev, e.target.files[i]]);
              reader.readAsDataURL(e.target.files[i]);
              reader.onload = () => {
                setImage((prev) => [...prev, reader.result]);
                reader.abort();
              };
            }
          }}
          type="file"
          multiple
        />
      ) : !text ? (
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="text"
        />
      ) : (
        <div>
          {image.map((x, i) => (
            <img key={x} className={styles.previewpics} src={x}></img>
          ))}
          <p>{name}</p>
          <p>{breed}</p>
          <p>{type}</p>
          <p>{text}</p>
          <button onClick={handleclick}>upload</button>
        </div>
      )}
    </div>
  );
}
