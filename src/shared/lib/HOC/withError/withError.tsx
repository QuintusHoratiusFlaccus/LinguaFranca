import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';
import React from 'react';

import type { WithError } from '@shared/lib/types/Error';
import type { Register } from '@shared/lib/types/ReactHookForm';

import styles from './withError.module.css';

export const withError =
    (Component: FC<any>) =>
    ({ error, className, ...rest }: WithError & HTMLAttributes<HTMLElement> & Register) => {
        const hasError = !!(Array.isArray(error) ? error.length : error);

        const classNames = clsx(hasError && styles['field--error'], className);

        return <Component {...rest} className={classNames} />;
    };
