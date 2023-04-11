import styles from "../styles/pages/Home.module.css";
import Navbar from "../components/Navbar";
import { FaSearch } from "react-icons/fa";

export default function Home() {
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
          <div className={styles.dogs}></div>
          <div className={styles.dogs}></div>
          <div className={styles.dogs}></div>
          <div className={styles.dogs}></div>
        </div>
        <div className={styles.petsAv}>Pets Available for Adoption Nearby</div>
        <div className={styles.petsAVApics}>
          <div className={styles.petsAVApic}></div>
          <div className={styles.petsAVApic}></div>
          <div className={styles.petsAVApic}></div>
          <div className={styles.petsAVApic}></div>
          <div className={styles.petsAVApic}></div>
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
    </div>
  );
}
