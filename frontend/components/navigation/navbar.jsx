import {ConnectButton} from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    const menus = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Contract",
            link: "/contract",
        }
    ];
    const linkTo = (menu) => {
        window.location.href = menu.link;
    };
    return (
        <nav className={styles.navbar}>
            <a href="/" target={"_self"} style={{color: "white"}}>
                {/*<img className={styles.alchemy_logo} src="/img.png" ></img>*/}
                Game
            </a>
            <ul className={'menus'} style={{witdh: '600px', display: "flex", alignItems: "center", justifyContent: "space-around", gap: "0 20px"}}>
                {
                    menus.map((menu, index) => {
                        return (
                            <li key={index} className={'menus-item'}>
                                <Link href={menu.link} target={"_self"} style={{color: "white"}}>
                                    {menu.name}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
            <ConnectButton></ConnectButton>
        </nav>
    );
}
