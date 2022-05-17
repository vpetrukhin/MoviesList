import {useEffect, useState} from "react";
import {useRouter} from 'next/router';
import {Navigation, Button} from "../../index";
import {MenuProps} from "./Menu.props";
import styles from "./Menu.module.scss";

export const Menu = ({className, ...props}: MenuProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { pathname } = useRouter();

    useEffect(() => {
        setIsOpen(!(document.documentElement.offsetWidth < 768))
    }, []);

    useEffect(() => {
        setIsOpen(!isOpen);
    }, [pathname])

    const handleClick = () => {
      setIsOpen(!isOpen);
    };

    return (
        <>
            <button className={styles.burger} type='button' onClick={handleClick}>
                <div className={styles.burgerLine} />
                <div className={styles.burgerLine} />
                <div className={styles.burgerLine} />
            </button>
            <div className={`${styles.menu} ${className} ${isOpen ? styles.menuActive : null}`} {...props}>
                <button className={styles.menuClose} onClick={handleClick} />
                <Navigation className={styles.menuNavigation} />
                <div className={styles.menuButtons}>
                    <Button className={styles.headerButtonsSignin} type='button' color='transparent'>Регистрация</Button>
                    <Button type='button' color='green'>Войти</Button>
                </div>
            </div>
        </>

    )
}