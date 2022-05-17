import styles from './Footer.module.scss';
import {FooterProps} from "./Footer.props";

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
      <footer className={`${styles.footer} ${className}`} {...props}>
          <p className={styles.footerCopyright}>&copy; {new Date().getFullYear()}</p>
          <ul className={styles.footerLinks}>
              <li className={styles.footerLink}>
                  <a href="https://github.com/vpetrukhin">Github</a>
              </li>
          </ul>
      </footer>
  )
}