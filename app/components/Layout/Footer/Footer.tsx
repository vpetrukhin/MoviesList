import styles from './Footer.module.scss';

export const Footer = () => {
  return (
      <footer className={styles.footer}>
          <p className={styles.footerCopyright}>&copy; {new Date().getFullYear()}</p>
          <ul className={styles.footerLinks}>
              <li className={styles.footerLink}>
                  <a href="https://github.com/vpetrukhin">Github</a>
              </li>
          </ul>
      </footer>
  )
}