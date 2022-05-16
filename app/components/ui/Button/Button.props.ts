import {DetailsHTMLAttributes} from "react";

export interface ButtonProps extends DetailsHTMLAttributes<HTMLButtonElement> {
    type: 'submit' | 'button' | 'reset';
    color?: 'green' | 'transparent' | 'blue';
}