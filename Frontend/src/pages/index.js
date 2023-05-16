import styles from "../styles/pages/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";
import { FaCat, FaDog } from "react-icons/fa";
import { IoMdPaw } from "react-icons/io";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Post from "@/components/Post";
import Advice from "@/components/Advice";
import CatDog from "@/components/Catdog";
import { UserContext } from "@/common/userContext";
import { useSession, signIn, signOut } from "next-auth/react";
import { Router, useRouter } from "next/router";
import Popup from "reactjs-popup";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [advices, setAdvices] = useState([]);
  const { user, decoded } = useContext(UserContext);
  const { data: session } = useSession();
  // const baseUrl = "https://amitanfy.onrender.com/";
  const baseUrl = "http://localhost:3030/";
  const router = useRouter();
  useEffect(() => {
    const arr = [];
    axios
      .get(baseUrl + "PetPosts")
      .then((res) => {
        setPosts(res.data);
        for (let i = 0; i < res.data.length; i++) {
          arr[i] = res.data[i];
        }
        setPosts(arr);
      })
      .catch((err) => console.log(err));
  }, []);
  axios
    .get(baseUrl + "advicePosts")
    .then((res) => {
      setAdvices(res.data);
    })
    .catch((err) => console.log(err));
  return (
    <div className={styles.outer}>
      <Navbar />
      <div className={styles.dropdowns}>
        <div className={styles.dropdown}>
          <p className={styles.dropdownText}>ОРОЛЦОХ БУЮУ ОРОЛЦОХ</p>
          <div className={styles.dropdownContent}>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={styles.dropdownText}>НОХОЙ, ГӨЛӨГ</p>
          <div className={styles.dropdownContent}>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={styles.dropdownText}>МУУР, МУУР</p>
          <div className={styles.dropdownContent}>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={styles.dropdownText}>БУСАД ТӨРЛИЙН АМЬТАД</p>
          <div className={styles.dropdownContent}>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.backimg}></div>
        <div className={styles.header}>Шинэ сайн найзаа олоорой</div>
        <div className={styles.underHeader}>
          Манай 11,500 гаруй хоргодох байр, аврах газрын тэжээвэр амьтдыг хайж
          олоорой
        </div>
        <div className={styles.finder}>
          <CatDog text={"нохой"} icon={<FaDog />} />
          <CatDog text={"муур"} icon={<FaCat />} />
          <CatDog text={"Бусад амьтад"} icon={<IoMdPaw />} />
          <CatDog text={"Хоргодох байр"} icon={<BsFillHouseHeartFill />} />
        </div>
        <div className={styles.petsAv}>
          Ойролцоох тэжээвэр амьтан үрчлүүлэх боломжтой
        </div>
        <div className={styles.petsAVApics}>
          {posts.map((x, i) => {
            const thumbnail = Buffer.from(x.data[0]).toString("base64");
            const mimeType = "image/jpeg";
            return (
              <Post
                key={x._id}
                id={x._id}
                img={`data:${mimeType};base64,${thumbnail}`}
                name={x.text}
                type={x.type}
                breed={x.breed}
              />
            );
          })}
          <div className={styles.meetthem}>
            <IoMdPaw className={styles.pawpaw} />
            Petfinder дээр өөр 84 тэжээвэр амьтан авах боломжтой
            <div className={styles.meetbottom}>Тэдэнтэй уулз</div>
          </div>
        </div>
        <div className={styles.middleWhite}>
          <div className={styles.planning}>
            Гэрийн тэжээвэр амьтан үрчлүүлэхээр төлөвлөж байна уу?
          </div>

          <div className={styles.planning3}>
            <div className={styles.plannigContent}>
              <div className={styles.planningHeader}>
                Шинээр хүлээн авагчдад зориулсан шалгах хуудас
              </div>
              <div className={styles.planningHeaderUnder}>
                Шилжилтийг аль болох жигд болгоход тусална уу.
              </div>
              <div className={styles.learnMore}>ИЛҮҮ ИХ СУДЛА</div>
            </div>

            <div className={styles.plannigContent}>
              <div className={styles.plannigContent}>
                <div className={styles.planningHeader}>COVID-19 Resources</div>
                <div className={styles.planningHeaderUnder2}>
                  Хүүхэд үрчлэн авах үйл явцын талаарх хамгийн сүүлийн үеийн
                  мэдээг авч, орон нутгийн хоргодох байрыг мэдэж аваарай мөн
                  аврах бүлгүүд дасан зохицож, та юу хийж чадахаа олж мэдээрэй
                  яг одоо тусламж хэрэгтэй байгаа нохой, мууранд туслаарай.
                </div>
                <div className={styles.learnMore}>ИЛҮҮ ИХ СУДЛА</div>
              </div>
            </div>

            <div className={styles.plannigContent}>
              <div className={styles.plannigContent}>
                <div className={styles.planningHeader}>
                  Гэрийн тэжээвэр амьтдыг үрчлүүлэх тухай түгээмэл асуултууд
                </div>
                <div className={styles.planningHeaderUnder}>
                  Бодож амжаагүй асуултууддаа хариулт аваарай.
                </div>
                <div className={styles.learnMore}>ИЛҮҮ ИХ СУДЛА</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.articles}>
          <div className={styles.articlesHeader}>Нийтлэл</div>
          <div className={styles.articlesMain}>
            <div className={styles.article1}>
              <div className={styles.middleDog}>
                <img
                  className={styles.middledogimg}
                  src="https://www.petfinder.com/sites/default/files/styles/card/public/images/content/47.jpeg?itok=HNT_yv1F"
                ></img>
              </div>
              <div className={styles.articleImg}>
                <div className={styles.filler}></div>
                <div className={styles.underPicWhite}>
                  <div className={styles.margintop}>
                    Нохой үрчлэх тухай нийтлэл
                  </div>
                  <div className={styles.lightgrey}>
                    Шинэ нохойгоо халамжлах талаар илүү ихийг мэдэж аваарай.
                  </div>
                </div>
              </div>
              <Popup
                trigger={
                  <button className={styles.articleReadMore}>
                    ИЛҮҮ ИХ СУДЛА
                  </button>
                }
                modal
                nested
              >
                <div className={styles.popUpContent}>
                  <div className={styles.popuptop}>
                    <div className={styles.addOwnAdvice}>
                      <div
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          router.push("/AddAdvice");
                        }}
                      >
                        Өөрийнхөө зөвлөгөөг нэмнэ үү
                      </div>
                    </div>
                    <div className={styles.leftright}>
                      <div className={styles.left}>
                        <HiOutlineArrowSmallLeft className={styles.arrows} />
                      </div>
                      <div className={styles.right}>
                        <HiOutlineArrowSmallRight className={styles.arrows} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.advicesppl}>
                    Хүмүүсийн хэлсэн зөвлөгөө
                  </div>
                  <div className={styles.popUpContent2}>
                    {advices.map((y, i) => {
                      return (
                        <Advice
                          id={y._id}
                          key={i}
                          title={y.title}
                          pic={y.thumbnail}
                        />
                      );
                    })}
                  </div>
                </div>
              </Popup>
            </div>

            <div className={styles.article2}>
              <div className={styles.middleDog}>
                <img
                  className={styles.middledogimg}
                  src="https://www.petfinder.com/sites/default/files/styles/card/public/images/content/PF2015_267_Kittens_Shelter-630.jpg?itok=JGTdJJaD"
                ></img>
              </div>
              <div className={styles.articleImg2}>
                <div className={styles.filler}></div>
                <div className={styles.underPicWhite}>
                  <div className={styles.margintop}>
                    муур үрчлэх тухай нийтлэл
                  </div>
                  <div className={styles.lightgrey}>
                    Шинэ муураа халамжлах талаар илүү ихийг мэдэж аваарай.
                  </div>
                </div>
              </div>
              <Popup
                trigger={
                  <button className={styles.articleReadMore}>
                    ИЛҮҮ ИХ СУДЛА
                  </button>
                }
                modal
                nested
              >
                <div className={styles.popUpContent}>
                  <div className={styles.popuptop}>
                    <div className={styles.addOwnAdvice}>
                      <div
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          router.push("/AddAdvice");
                        }}
                      >
                        Өөрийнхөө зөвлөгөөг нэмнэ үү
                      </div>
                    </div>
                    <div className={styles.leftright}>
                      <div className={styles.left}>
                        <HiOutlineArrowSmallLeft className={styles.arrows} />
                      </div>
                      <div className={styles.right}>
                        <HiOutlineArrowSmallRight className={styles.arrows} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.advicesppl}>
                    Хүмүүсийн хэлсэн зөвлөгөө
                  </div>
                  <div className={styles.popUpContent2}>
                    {advices.map((y, i) => {
                      return (
                        <Advice
                          id={y._id}
                          key={i}
                          title={y.title}
                          pic={y.thumbnail}
                        />
                      );
                    })}
                  </div>
                </div>
              </Popup>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
