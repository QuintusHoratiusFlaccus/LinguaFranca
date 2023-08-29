import type { FC } from 'react';
import React from 'react';

import type { OverlayProps } from '@shared/components/molecules/Overlay/Overlay.types';

import styles from './Overlay.module.css';

const Overlay: FC<OverlayProps> = ({ onBackdropClick, children }) => (
    <div onClick={onBackdropClick} className={styles.overlay}>
        {children}
    </div>
);

export default Overlay;
