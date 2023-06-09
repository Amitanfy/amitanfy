import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import styles from "../../styles/pages/postDetails.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Post() {
  const router = useRouter();
  const [post, setPost] = useState(null);
  const baseUrl = process.env.API_KEY;

  useEffect(() => {
    if (router.isReady) {
      const { pid } = router.query;
      axios
        .get(baseUrl + "PetPost/" + pid)
        .then((res) => {
          setPost(res.data[0]);
          console.log(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  if (post !== null) {
    const thumbnail = Buffer.from(post.data[0].data).toString("base64");
    const mimeType = "image/jpeg";

    return (
      <div>
        <Navbar />
        <div className={styles.body}>
          <div className={styles.page1}>
            <div className={styles.imgCon}>
              <Carousel className={styles.img}>
                <img src={`data:${mimeType};base64,${thumbnail}`}></img>
                <img src={`data:${mimeType};base64,${thumbnail}`}></img>
                <img src={`data:${mimeType};base64,${thumbnail}`}></img>
              </Carousel>
            </div>

            <div className={styles.info}>
              <div className={styles.card}>
                <div className={[styles.name, styles.font].join(" ")}>
                  {post.name}
                </div>
                <div className={[styles.location, styles.font].join(" ")}>
                  {" "}
                  {post.breed +" "+ post.type}
                </div>

                <div className={[styles.name, styles.font].join(" ")}>
                  About
                </div>
                <div className={[styles.about, styles.font].join(" ")}>
                  {post.text}
                </div>

                {/*  <h1 className={styles.name}>Bella</h1>
                <p className={styles.location}>somewhere </p>
                <p className={styles.category}>female * bulldog * dumb af</p>
                <p className={styles.about}> she has to eat 4times every hours she fat af feed her so much</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
