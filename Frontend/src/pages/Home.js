import styles from "../styles/pages/Home.module.css";

export const Home = () => {
  console.log(process.env.FACEBOOK_CLIENT_ID)
  return (
    <div className={styles.outer}>
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
          <div className={styles.petFinder}></div>
        </div>
      </div>
    </div>
  );
};
