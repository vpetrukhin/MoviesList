import {NavigationProps} from "./Navigation.props";
import Link from "next/link";
import styles from "./Navigation.module.scss";
import {NAVIGATION_LIST} from "../../utils/constans";
import {useRouter} from "next/router";

export const Navigation = ({ className, ...props }: NavigationProps) => {
    const { pathname } = useRouter();

    return (
        <nav className={styles.nav} {...props} >
            {NAVIGATION_LIST.map(({ id, href, title }) => (
                <Link href={href} key={id}>
                    <a className={`${styles.navLink} ${pathname === href ? styles.navLinkActive : null}`}>{title}</a>
                </Link>
            ))}
        </nav>
    )
}