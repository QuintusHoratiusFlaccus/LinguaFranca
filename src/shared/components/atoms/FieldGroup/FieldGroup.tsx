import clsx from 'clsx';
import type { FC } from 'react';

import styles from './FieldGroup.module.css';
import type { FieldGroupProps } from './FieldGroup.types';

const FieldGroup: FC<FieldGroupProps> = ({ className, children, ...rest }) => {
    const formGroupClassNames = clsx(styles.group, className);

    return (
        <div className={formGroupClassNames} {...rest}>
            {children}
        </div>
    );
};

export default FieldGroup;
