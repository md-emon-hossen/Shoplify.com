import Image from "next/image";
import { useEffect, useState } from "react";
import new1 from "../public/new1.jpg";
import new2 from "../public/new2.jpg";
import new3 from "../public/new3.jpg";
import new4 from "../public/new4.jpg";
import styles from "../styles/BilBoard.module.css";

export default function BilBoard() {
    const [value, setvalue] = useState(0);
    const image = [new1, new2, new3, new4];

    function stateUpdat() {
        setvalue((prevState) => {
            return prevState + 1;
            if (value === image.length) {
                return setvalue(0);
            }
        })
    }

    useEffect(() => {
        stateUpdat();
    }, 2000);

    console.log(value);
    return (
        <div className={styles.bilboardWrp}>
            <Image className={styles.image} src={image[value]} alt="Banner" />
        </div>
    )
}
