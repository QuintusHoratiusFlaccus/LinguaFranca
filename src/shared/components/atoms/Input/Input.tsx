import clsx from 'clsx';
import React from 'react';

import { withError } from '../../../lib/HOC/withError';
import styles from './Input.module.css';
import type { InputProps } from './Input.types';

const Input: React.FC<InputProps> = ({
    type = 'text',
    id,
    placeholder,
    disabled,
    className,
    register,
    name,
    ...rest
}) => {
    const inputClassNames = clsx(styles.field, disabled && styles['field--disabled'], className);
    const registeredField = register(name);

    return (
        <input
            type={type}
            id={id}
            className={inputClassNames}
            placeholder={placeholder}
            disabled={disabled}
            {...registeredField}
            {...rest}
        />
    );
};

export default withError(Input);
