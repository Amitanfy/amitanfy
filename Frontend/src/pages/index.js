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
          <p className={styles.dropdownText}>ADOPT OR GET INVOLVED</p>
          <div className={styles.dropdownContent}>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={styles.dropdownText}>DOGS & PUPPIES</p>
          <div className={styles.dropdownContent}>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={styles.dropdownText}>CATS & KITTENS</p>
          <div className={styles.dropdownContent}>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
            <p className={styles.lorem}>lorem</p>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={styles.dropdownText}>OTHER TYPES OF PETS</p>
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
        <div className={styles.searchOptions}>
          <input
            className={styles.searchPet}
            placeholder="Search Terrier, Kitten, etc"
          ></input>
          <div className={styles.navbarVerticalLine}></div>
          <input
            className={styles.searchLocation}
            placeholder="Enter City, State or ZIP"
          ></input>
          <div className={styles.petFinder}>
            <FaSearch />
          </div>
        </div>
        <div className={styles.header}>Find your new best friend</div>
        <div className={styles.underHeader}>
          Browse pets from our network of over 11,500 shelters and rescues
        </div>
        <div className={styles.finder}>
          <CatDog text={"Dog"} icon={<FaDog />} />
          <CatDog text={"Cat"} icon={<FaCat />} />
          <CatDog text={"Other Animals"} icon={<IoMdPaw />} />
          <CatDog text={"Shelters & Rescues"} icon={<BsFillHouseHeartFill />} />
        </div>
        <div className={styles.petsAv}>Baigaa amitanuud</div>
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
        </div>
        <div className={styles.middleWhite}>
          <div className={styles.planning}>Planning to Adopt a Pet?</div>

          <div className={styles.planning3}>
            <div className={styles.plannigContent}>
              <div className={styles.planningHeader}>
                Checklist for New Adopters
              </div>
              <div className={styles.planningHeaderUnder}>
                Help make the transition, as smooth as possible.
              </div>
              <div className={styles.learnMore}>LEARN MORE</div>
            </div>

            <div className={styles.plannigContent}>
              <div className={styles.plannigContent}>
                <div className={styles.planningHeader}>COVID-19 Resources</div>
                <div className={styles.planningHeaderUnder2}>
                  Get the latest on adoption processes, learn how local shelters
                  and rescue groups are adapting and find out what you can do to
                  help dogs and cats in need right now.
                </div>
                <div className={styles.learnMore}>LEARN MORE</div>
              </div>
            </div>

            <div className={styles.plannigContent}>
              <div className={styles.plannigContent}>
                <div className={styles.planningHeader}>Pet Adoption FAQs</div>
                <div className={styles.planningHeaderUnder}>
                  Get answers to questions you haven't thought of.
                </div>
                <div className={styles.learnMore}>LEARN MORE</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.articles}>
          <div className={styles.articlesHeader}>Articles</div>
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
                  <div className={styles.margintop}>Dog Adoption Articles</div>
                  <div className={styles.lightgrey}>
                    Learn more about caring for your new dog.
                  </div>
                </div>
              </div>
              <Popup
                trigger={
                  <button className={styles.articleReadMore}>READ MORE</button>
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
                        Add your own advice
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
                    Advices people have said
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
                  <div className={styles.margintop}>Cat Adoption Articles</div>
                  <div className={styles.lightgrey}>
                    Helpful insights on what we expect you too see.
                  </div>
                </div>
              </div>
              <Popup
                trigger={
                  <button className={styles.articleReadMore}> READ MORE</button>
                }
                modal
                nested
              >
                <div className={styles.popUpContent}>
                  {advices.map((y, i) => {
                    return <Advice key={i} title={y.title} pic={y.thumbnail} />;
                  })}
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
