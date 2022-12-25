import Link from "next/link";
import styles from "../styles/header/HeaderToolTip.module.css";

export default function HeaderTooltip({ name, destination }) {
    return (
        <Link href={destination} className={styles.ToolTipWrp}>{name}</Link>
    )
}
