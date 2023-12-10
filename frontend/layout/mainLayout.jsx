import Navbar from "../components/navigation/navbar";
import styles from '../styles/Layout.module.css'
export default function MainLayout({ children }) {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.bg}></div>
            <Navbar />
            {children}
		</div>
	);
}
