import styles from './Logo.module.scss';
import {LogoProps} from "./Logo.props";

export const Logo = ({ className, ...props }: LogoProps) => {
    return (
        <div className={`${styles.logo} ${className}`} {...props}/>
    )
}