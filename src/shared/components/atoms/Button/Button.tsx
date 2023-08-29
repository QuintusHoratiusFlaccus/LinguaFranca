import React from 'react';

import styles from './Button.module.css';
import type { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
    <button className={styles.button} {...props}>
        {children}
    </button>
);

export default Button;
