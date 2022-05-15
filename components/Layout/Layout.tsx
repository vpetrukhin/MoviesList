import {LayoutProps} from "./Layout.props";
import {Footer, Header} from "../";
import styles from "./Layout.module.scss";

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}