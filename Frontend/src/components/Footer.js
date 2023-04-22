import styles from "../styles/components/Footer.module.css";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.outer}>
      <div className={styles.main}>
        <div className={styles.upper}>
          <img
            className={styles.logo}
            alt="logoImg"
            src="https://www.petfinder.com/themes/custom/consumer_react/logo.svg"
          />
        </div>
        <div className={styles.middle}>
          <div className={styles.RESOURCES}>
            <div className={styles.Header}>RESOURCES</div>
            <div>FAQS</div>
            <div>Mobile App Download</div>
            <div>Partnerships</div>
            <div>News Center</div>
            <div>Put Petfinder On Your Site</div>
            <div>For Developers</div>
            <div>Contact Us</div>
          </div>

          <div className={styles.RESOURCES}>
            <div className={styles.Header}>ADOPT OR GET INVOLVED</div>
            <div>All Adopt or Get Involved</div>
            <div>Adopting Pets</div>
            <div>Animal Shelters & Rescues</div>
            <div>Other Types of Pets</div>
          </div>

          <div className={styles.RESOURCES}>
            <div className={styles.Header}>ABOUT DOGS & PUPPIES</div>
            <div>All About Dogs & Puppies</div>
            <div>Dog Adoption</div>
            <div>Dog Breeds</div>
            <div>Feeding Your Dog</div>
            <div>Dog Behavior</div>
            <div>Dog Health & Wellness</div>
            <div>Dog Training</div>
            <div>Other Dog Information</div>
          </div>

          <div className={styles.RESOURCES}>
            <div className={styles.Header}>ABOUT CATS & KITTENS</div>
            <div>All About Cats & Kittens</div>
            <div>Cat Adoption</div>
            <div>Cat Breeds</div>
            <div>Feeding Your Cat</div>
            <div>Cat Behavior</div>
            <div>Cat Health & Wellness</div>
            <div>Cat Training</div>
            <div>Other Cat Information</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardWord}>
              To get the lastest on pet adoption and pet care, sign up for the
              Petfinder newsletter.
            </div>
            <div className={styles.Sign}>SIGN UP</div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div>Shelter & Rescue Registration</div>
          <div>|</div>
          <div>Sitemap</div>
          <div>|</div>
          <div>Terms of Service</div>
          <div>|</div>
          <div>Notice at Collection</div>
          <div>|</div>
          <div>privacy Policy (updated)</div>
          <div>|</div>
          <div>About Our Ads</div>
          <div>|</div>
          <div>Do Not Sell Or Share My Personal Information</div>
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          ©2023 Petfinder.com All trademarks are owned by Société des Produits
          Nestlé S.A., or used with permission.
        </div>
        <div className={styles.icons}>
          <ImFacebook className={styles.icon} />
          <ImTwitter className={styles.icon} />
          <BsInstagram className={styles.icon} />
          <AiFillYoutube className={styles.icon} />
          <FaPinterestP className={styles.icon} />
        </div>
      </div>
    </div>
  );
}
