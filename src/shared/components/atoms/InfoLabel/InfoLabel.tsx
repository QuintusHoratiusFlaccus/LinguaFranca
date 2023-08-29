import clsx from 'clsx';
import React from 'react';

import styles from './InfoLabel.module.css';
import type { InfoLabelProps } from './InfoLabel.types';

const InfoLabel: React.FC<InfoLabelProps> = ({ label, className, ...rest }) => (
    <label className={clsx(styles.info, className)} {...rest}>
        {label}
    </label>
);

export default InfoLabel;
