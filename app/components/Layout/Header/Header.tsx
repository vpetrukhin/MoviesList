import styles from './Header.module.scss';
import { Logo, Menu } from "../../index";
import {HeaderProps} from "./Header.props";

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
      <header className={`${styles.header} ${className}`} {...props}>
          <Logo className={styles.headerLogo} />
          <Menu />
      </header>
  )
};