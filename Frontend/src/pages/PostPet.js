import { UserContext } from "@/common/userContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styles from "../styles/pages/Postpet.module.css";
import { useSession } from "next-auth/react";

export default function PostPet() {
  const [file, setFile] = useState([]);
  const [image, setImage] = useState([]);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState(null);
  const [breeds, setBreeds] = useState(null);
  const [breed, setBreed] = useState(null);
  const [temp, setTemp] = useState(null);
  const { user, decoded } = useContext(UserContext);
  // const baseUrl = "https://amitanfy.onrender.com/";
  const baseUrl = "http://localhost:3030/";

  const handleclick = () => {
    console.log(breed);
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
      url: baseUrl + "PostPet",
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: user ? user : null,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCat = () => {
    setType("cat");
    axios
      .get("https://api.thecatapi.com/v1/breeds", {
        headers: {
          "x-api-key":
            "live_fd6kTpGPF7MQFsv5MWE8rS1I31kbQFikB4WYMEsfx6hzF6uMPQzLDQV4MxLo0Uy6",
        },
      })
      .then((res) => console.log(setBreeds(res.data)));
  };
  const handleDog = () => {
    setType("dog");
    axios
      .get("https://api.thedogapi.com/v1/breeds", {
        headers: {
          "x-api-key":
            "live_Y5R8rSzcsVpEbKph6DXfrc8n2wBg5D0iJcLbMQeXH1NbdLVXPl5PffRiBMpGlPQ6",
        },
      })
      .then((res) => console.log(setBreeds(res.data)));
  };
  return (
    <div>
      {!breeds ? (
        <div className={styles.backdrop}>
          <div onClick={handleCat}>cat</div>
          <div onClick={handleDog}>dog</div>
        </div>
      ) : !breed ? (
        <div className={styles.breedpage}>
          <div>
            {breeds.map((x, i) => {
              return (
                <div
                  key={x.name}
                  onClick={() => {
                    setTemp(x);
                  }}
                >
                  {x.name}
                </div>
              );
            })}
          </div>
          <button
            className={styles.buttons}
            onClick={() => {
              setBreed(temp.name);
            }}
          >
            submit
          </button>
          <img
            className={styles.images}
            src={temp ? temp.image.url : null}
          ></img>
        </div>
      ) : !name ? (
        <>
          <input id="name" placeholder="name"></input>
          <button
            onClick={() => {
              setName(document.getElementById("name").value);
            }}
          >
            submit
          </button>
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
        <>
          <input id="text" placeholder="text" />
          <button
            onClick={() => {
              setText(document.getElementById("text").value);
            }}
          >
            submit
          </button>
        </>
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
