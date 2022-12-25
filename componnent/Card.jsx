import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import img from "../public/default-img.jpg";
import styles from "../styles/Card.module.css";

export default function Card() {
    return (
        <div className={styles.cardWrp}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src={img} />
            </div>
            <div className={styles.cradDetailse}>
                <div>
                    <h4 className={styles.title}>Stylish Denim Jeans Pant for Men</h4>
                </div>
                <div>
                    <p className={styles.staring}>
                        <span><AiTwotoneStar className={styles.startIcons} />5/5 (3)</span>
                        <span>72 Sold</span>
                    </p>
                </div>
                <div>
                    <span className={styles.staring}>
                        <span className={styles.prcePlusIcons}><TbCurrencyTaka className={styles.startIcons} />260</span>
                        <span><del className={styles.del}>360</del></span>
                    </span>
                </div>
            </div>
        </div>
    )
}
