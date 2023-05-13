import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar"
import styles from "../../styles/pages/postDetails.module.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Post() {
  const router = useRouter();
  const [post, setPost] = useState(null);
  // const baseurl = "https://amitanfy.onrender.com/";
  const baseurl = "http://localhost:3030/"
  useEffect(() => {
    if (router.isReady) {
      const { pid } = router.query;
      console.log(router.query);
      axios
        .get(baseurl + "PetPost/" + pid)
        .then((res) => {
          setPost(res.data[0]);
          console.log(res.data[0].data[0].data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [])
  if (post !== null) {
    const thumbnail = Buffer.from(post.data[0].data).toString("base64");
    const mimeType = "image/jpeg";

    return (
      <div>
        <Navbar />
        <div className={styles.body}>

          <div className={styles.page1}>
            <div className={styles.imgCon}>
              <div className={styles.img}>
                <Carousel showThumbs={false} showStatus={false} showArrows={true} dynamicHeight={false} emulateTouch={false} centerMode={false} centerSlidePercentage={100}>
                  <div className={styles.slideImg}>
                    <img src={`data:${mimeType};base64,${thumbnail}`}></img>
                  </div>
                  <div className={styles.slideImg}>
                    <img src={`data:${mimeType};base64,${thumbnail}`}></img>
                  </div>
                </Carousel>
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.card}>
                <div className={[styles.name, styles.font].join(' ')}>Bella</div>
                <div className={[styles.location, styles.font].join(' ')}> Affenpinscher  Mangilao, GU</div>
                <div className={[styles.category, styles.font].join(' ')}>Female | dog | dumb</div>
                <div className={[styles.name, styles.font].join(' ')}>About</div>
                <div className={[styles.about, styles.font].join(' ')}>she has to eat 4times every hours she fat af feed her so much</div>

              </div>
              <div className={styles.feedback}>
                <div className={[styles.feedbackText, styles.feedbackFont].join(' ')}>Considering Kenai for adoption?</div>
                <div className={styles.feedbackButt}>START YOUR INQUIRY</div>
                <div className={styles.feedbackButt}>READ FAQS</div>
                <div className={styles.feedbackBigButt}>
                  <div className={[styles.feedbackButt2, styles.right].join(' ')}>SPONSOR</div>
                  <div className={[styles.feedbackButt2, styles.left].join(' ')}>FAVORITE</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.page2}>
            <div className={styles.content1}>
              <div className={styles.section1}>
                <div className={styles.upperImg}></div>
                <div className={styles.upperText}>
                  <div className={[styles.upperLilText, styles.upperBold].join(' ')}>Ask about Kenai</div>
                  <div className={[styles.upperLilText, styles.upperThin].join(' ')}>
                    <div>American short hair</div>
                    <div>young | male | large</div>
                  </div>
                </div>
              </div>
              <div className={styles.section2}>
                <div className={[styles.lowerLilText, styles.upperThin].join(' ')}>
                  <div>Please note that Guam Animals In Need is not able to answer inquiries via email through Petfinder at this time.</div>
                  <div>You may call them with your inquiry at: (671) 653-4246</div>
                  <div>You may also find more information about the organization on their homepage: https://www.petfinder.com/member/us/gu/mangilao/guam-animals-in-need-gu01/</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
  return (
    <p>error 123</p>
  )
}
