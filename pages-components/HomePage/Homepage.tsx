import Head from "next/head";
import Link from "next/link";
import styles from "./Homepage.module.scss";

export const Homepage = () => {
    return (
        <>
            <Head>
                <title>Movie List | Home</title>
            </Head>
            <section className={styles.home}>
                <h1 className={styles.homeTitle}>Movies List</h1>
                <p className={styles.homeOffer}>Найдется фильм на любой вкус</p>
                <Link href='/films'><a className={styles.homeLink}>Искать фильмы</a></Link>
            </section>
        </>
    )
}