import { useState } from "react";
import styles from "../styles/pages/Search.module.css";
import Navbar from "../components/Navbar"
export default function Search() {
    const [isAgeAccordionOpen, setIsAgeAccordionOpen] = useState(false);
    const [isBreedAccordionOpen, setIsBreedAccordionOpen] = useState(false);
    const [isColorAccordionOpen, setIsColorAccordionOpen] = useState(false);
    const [isWeightAccordionOpen, setIsWeightAccordionOpen] = useState(false);
    const [rotateIcon, setRotateIcon] = useState(0);
    const [age, setAge] = useState("any");
    const [breed, setBreed] = useState("any");
    const [color, setColor] = useState("any");
    const [size, setSize] = useState("any");

    const resetAccordions = () => {
        setIsAgeAccordionOpen(false);
        setIsBreedAccordionOpen(false);
        setIsColorAccordionOpen(false);
        setIsWeightAccordionOpen(false);
    }

    const ageAccordionHandler = () => {
        resetAccordions();
        setIsAgeAccordionOpen(!isAgeAccordionOpen);

    };

    const breedAccordionHandler = () => {
        resetAccordions();
        setIsBreedAccordionOpen(!isBreedAccordionOpen);
    };

    const colorAccordionHandler = () => {
        resetAccordions();
        setIsColorAccordionOpen(!isColorAccordionOpen);
    };

    const weightAccordionHandler = () => {
        resetAccordions();
        setIsWeightAccordionOpen(!isWeightAccordionOpen);
    };

    const mockArr = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, "GoldenRetriever", "Husky"
    ]
    return (
        <div>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.contentCon}>
                    <div className={styles.sort}>

                        <div className={styles.miniSortCon}>
                            <p className={styles.sortText}>Age</p>
                            <div className={styles.sortOption} onClick={ageAccordionHandler}>
                                <p className={styles.sortAnyText}>{age}</p>
                            </div>
                            {isAgeAccordionOpen && (
                                <div className={styles.AccorditionCon}>
                                    <div className={styles.Accordition}>

                                        {
                                            mockArr && mockArr.map((item, index) => (
                                                <div className={styles.option} key={index} onClick={() => {
                                                    resetAccordions();
                                                    setAge(item)
                                                }}>

                                                    <p className={styles.Text}>{item}</p>
                                                </div>
                                            ))

                                        }

                                    </div>
                                </div>

                            )}
                        </div>

                        <div className={styles.miniSortCon}>
                            <p className={styles.sortText}>Breed</p>
                            <div className={styles.sortOption} onClick={breedAccordionHandler}>
                                <p className={styles.sortAnyText}>{breed}</p>
                            </div>
                            {isBreedAccordionOpen && (
                                <div className={styles.AccorditionCon}>
                                    <div className={styles.Accordition}>
                                        {
                                            mockArr && mockArr.map((item, index) => (
                                                <div className={styles.option} key={index} onClick={() => {
                                                    resetAccordions();
                                                    setBreed(item)
                                                }}>

                                                    <p className={styles.Text}>{item}</p>
                                                </div>
                                            ))

                                        }
                                    </div>
                                </div>

                            )}
                        </div>

                        <div className={styles.miniSortCon}>
                            <p className={styles.sortText}>Color</p>
                            <div className={styles.sortOption} onClick={colorAccordionHandler}>
                                <p className={styles.sortAnyText}>{color}</p>
                            </div>
                            {isColorAccordionOpen && (
                                <div className={styles.AccorditionCon}>
                                    <div className={styles.Accordition}>
                                        {
                                            mockArr && mockArr.map((item, index) => (
                                                <div className={styles.option} key={index} onClick={() => {
                                                    resetAccordions();
                                                    setColor(item)
                                                }}>

                                                    <p className={styles.Text}>{item}</p>
                                                </div>
                                            ))

                                        }

                                    </div>
                                </div>

                            )}
                        </div>

                        <div className={styles.miniSortCon}>
                            <p className={styles.sortText}>Size</p>
                            <div className={styles.sortOption} onClick={weightAccordionHandler}>
                                <p className={styles.sortAnyText}>{size}</p>
                            </div>
                            {isWeightAccordionOpen && (
                                <div className={styles.AccorditionCon}>
                                    <div className={styles.Accordition}>
                                        {
                                            mockArr && mockArr.map((item, index) => (
                                                <div className={styles.option} key={index} onClick={() => {
                                                    resetAccordions();
                                                    setSize(item)
                                                }}>

                                                    <p className={styles.Text}>{item}</p>
                                                </div>
                                            ))

                                        }

                                    </div>
                                </div>

                            )}
                        </div>

                    </div>
                    <div className={styles.post}></div>
                </div>
            </div>
        </div>
    );
}