import {ConnectButton} from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import {useRouter} from 'next/navigation'
import {useState} from "react";

export default function Navbar() {
    const router = useRouter();
    const menus = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/about",
        }
    ];
    const [menuActive, setMenuActive] = useState('/');
    const menuActiveChange = (menu) => {
        setMenuActive(menu.link);
        router.push(menu.link)
        document.title = menu.name;
    }
    return (
        <nav className={styles.navbar}>
            <Link href="/" target={"_self"} className={styles.alchemyLogo}>
                {/*<img className={styles.alchemy_logo} src="/img.png" ></img>*/}
                Tic-Tac-Toe Game
            </Link>
            <ul className={styles.menus}>
                {
                    menus.map((menu, index) => {
                        return (
                            <li key={index} className={`${styles.menusItem} ${menuActive === menu.link ? styles.active : ''}`}
                                onClick={() => menuActiveChange(menu)}>
                                {menu.name}
                            </li>
                        );
                    })
                }
            </ul>
            <div className={styles.connectBtn}>
                <ConnectButton></ConnectButton>
            </div>
        </nav>
    );
}
