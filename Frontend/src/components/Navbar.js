import styles from "../styles/components/Navbar.module.css";
import { BsArrowUpShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { Router, useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { UserContext } from "@/common/userContext";
import { useContext } from "react";

export default function Navbar() {
  const router = useRouter();
  const { user, decoded } = useContext(UserContext);
  const { data: session } = useSession();
  return (
    <div className={styles.outer}>
      <div className={styles.left}>
        <img
          className={styles.logo}
          alt="logoImg"
          src="https://www.petfinder.com/themes/custom/consumer_react/logo.svg"
        />
        <p className={styles.allaboutpets}>
          ALL ABOUT PETS <BsArrowUpShort className={styles.navbararrow} />
        </p>
      </div>
      <div className={styles.right}>
        <AiFillHeart className={styles.navbarHeart} />
        <div className={styles.navbarVerticalLine}></div>
        {!user ? (
          <div>
            <p
              onClick={() => {
                router.push("/SignUp");
              }}
              className={styles.navbarSign}
            >
              Sign Up
            </p>
            <p
              onClick={() => {
                router.push("/SignIn");
              }}
              className={styles.navbarLog}
            >
              Sign in
            </p>
          </div>
        ) : (
          <div>
            <p
              onClick={() => {
                localStorage.removeItem("user");
                session ? signOut() : null;
              }}
              className={styles.navbarLog}
            >
              Sign Out
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
