import Head from "next/head";

import styles from "./FilmsPage.module.scss";

export const FilmsPage = () => {
    return (
        <>
            <Head>
                <title>Movies List | Films</title>
            </Head>
            <section className={styles.films}>
                <div>Поиск</div>
                <div>Список фильмов</div>
            </section>
        </>
    )
}