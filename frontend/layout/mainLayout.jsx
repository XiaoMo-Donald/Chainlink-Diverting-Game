import Navbar from "../components/navigation/navbar";
import styles from '../styles/Layout.module.css'
export default function MainLayout({ children }) {
	return (
		<div>
			<div className={styles.bg}></div>
            <Navbar />
            {children}
		</div>
	);
}
