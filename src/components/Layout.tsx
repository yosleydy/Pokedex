import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from './layout.module.css';
type LayoutProps = {
    children:ReactNode;
}
const Layout = ({children}:LayoutProps) => {

    return (
        <>
        <Header/>
            <div className={styles.children}>
                <div className={styles.childrenresponsive}>
                {children}
                </div>
            </div>
        <Footer/>
        </>
    );
};

export default Layout;