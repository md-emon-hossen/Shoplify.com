import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import styles from "../styles//header/Header.module.css";
import HeaderTooltip from "./HeaderTooltip";
export default function Header() {
    return (
        <div className={styles.headerWrp}>
            <div className={styles.topberWrp}>
                <div>
                    <h1>Shoplify</h1>
                </div>
                <div>
                    <div className={styles.navWrp}>
                        <div>
                            <AiOutlineShoppingCart className={styles.icons} />
                        </div>
                        <div>
                            <AiOutlineUser className={styles.icons} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.toolTipWrp}>
                <HeaderTooltip name="Home" destination="/" />
                <HeaderTooltip name="Shop" destination="/" />
                <HeaderTooltip name="Top" destination="/" />
                <HeaderTooltip name="Fashion" destination="/" />
                <HeaderTooltip name="Home" destination="/" />
                <HeaderTooltip name="Home" destination="/" />
                <HeaderTooltip name="Home" destination="/" />
                <HeaderTooltip name="Home" destination="/" />
                <HeaderTooltip name="Shop" destination="/" />
                <HeaderTooltip name="Home" destination="/" />
            </div>
        </div>
    )
}
