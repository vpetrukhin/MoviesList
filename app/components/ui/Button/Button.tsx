import {ButtonProps} from "./Button.props";
import styles from "./Button.module.scss";

export const Button = ({ children, className, type, color = "transparent", ...props }: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${className} ${styles[color]}`}
            type={type}
            {...props}
        >
            {children}
        </button>
    )
}