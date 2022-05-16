import styles from './Header.module.scss';
import {Button, Logo, Navigation} from "../../index";

export const Header = () => {
  return (
      <header className={styles.header}>
          <Logo className={styles.headerLogo} />
          <Navigation />
          <div className={styles.headerButtons}>
              <Button className={styles.headerButtonsSignin} type='button' color='transparent'>Регистрация</Button>
              <Button type='button' color='green'>Войти</Button>
          </div>
      </header>
  )
};