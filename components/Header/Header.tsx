import styles from './Header.module.scss';
import {Logo, Navigation} from "../";

export const Header = () => {
  return (
      <header className={styles.header}>
          <Logo />
          <Navigation />
          <div className={styles.headerButtons}>

          </div>
      </header>
  )
};