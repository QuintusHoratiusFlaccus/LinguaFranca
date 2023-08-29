import React from 'react';

import styles from './ErrorLabel.module.css';
import type { ErrorLabelProps } from './ErrorLabel.types';

const ErrorLabel: React.FC<ErrorLabelProps> = ({ error, ...labelProps }) => {
    const helpContent = Array.isArray(error) ? (
        error.map((item, idx) => (
            <label key={idx} className={styles.error} {...labelProps}>
                {item?.message}
            </label>
        ))
    ) : (
        <label className={styles.error} {...labelProps}>
            {error?.message}
        </label>
    );

    return <>{helpContent}</>;
};

export default ErrorLabel;
