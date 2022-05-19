import Head from "next/head";
import {useGetFilmsQuery} from '../../app/services/films.service';

import styles from "./FilmsPage.module.scss";

export const FilmsPage = () => {
    const { data, error, isLoading } = useGetFilmsQuery('films');


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