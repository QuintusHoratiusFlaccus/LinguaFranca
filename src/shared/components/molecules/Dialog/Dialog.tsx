import type { FC, PropsWithChildren } from 'react';

import styles from './Dialog.module.css';

const Dialog: FC<PropsWithChildren> = ({ children, ...props }) => (
    <div className={styles.dialog} {...props}>
        {children}
    </div>
);

export default Dialog;
