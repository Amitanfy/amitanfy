import styles from "../styles/pages/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPlus, FaSearch } from "react-icons/fa";
import { FaCat, FaDog } from "react-icons/fa";
import { IoMdPaw } from "react-icons/io";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Post from "@/components/Post";
import { UserContext } from "@/common/userContext";
import { useSession, signIn, signOut } from "next-auth/react";
import { Router, useRouter } from "next/router";
import jwtDecode from "jwt-decode";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { user, decoded } = useContext(UserContext);
  const baseUrl = process.env.API_KEY;
  const router = useRouter();
  useEffect(() => {
    console.log(decoded);
  }, [decoded]);

  useEffect(() => {
    const arr = [];
    axios
      .get(baseUrl + "PetPosts/all")
      .then((res) => {
        setPosts(res.data);
        for (let i = 0; i < res.data.length; i++) {
          arr[i] = res.data[i];
        }
        setPosts(arr);
      })
      .catch((err) => console.log(err));
  }, []);
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
        <div className={styles.header}>Find your new best friend</div>
        <div className={styles.finder}>
          <div
            onClick={() => {
              router.push("/PetPosts/dogs");
            }}
            className={styles.container}
          >
            <div>
              <FaDog className={styles.icon} />
            </div>
            <div>
              <div>Dogs</div>
            </div>
          </div>

          <div
            onClick={() => {
              router.push("/PetPosts/cats");
            }}
            className={styles.container}
          >
            <div>
              <FaCat className={styles.icon2} />
            </div>
            <div>
              <div>Cats</div>
            </div>
          </div>

          <div
            onClick={() => {
              router.push("/PetPosts/others");
            }}
            className={styles.container}
          >
            <div>
              <IoMdPaw className={styles.icon} />
            </div>
            <div>
              <div>Other Animals</div>
            </div>
          </div>
          <div
            onClick={() => {
              router.push("/PostPet");
            }}
            className={styles.container}
          >
            <div>
              <FaPlus className={styles.icon2}/>
            </div>
            <div>
              <div>Post Your Pet</div>
            </div>
          </div>

        </div>
        <div className={styles.petsAVApics}>
          {posts.map((x, i) => {
            if(i>=4) return
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
          <div onClick={()=>{
            router.push("/PetPosts/all")
          }} className={styles.post}>{posts.length} more pets available on petfinder</div>
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
      </div>
      <Footer />
    </div>
  );
}
