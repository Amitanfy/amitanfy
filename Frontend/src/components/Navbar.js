import styles from "../styles/components/Navbar.module.css";
import { BsArrowUpShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

export default function Navbar() {
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
        <p className={styles.navbarSign}>Sign Up</p>
        <p className={styles.navbarLog}>Log in</p>
      </div>
    </div>
  );
}
