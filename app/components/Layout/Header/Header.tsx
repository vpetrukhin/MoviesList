import styles from './Header.module.scss';
import { Logo, Menu } from "../../index";

export const Header = () => {
  return (
      <header className={styles.header}>
          <Logo className={styles.headerLogo} />
          <Menu />
      </header>
  )
};