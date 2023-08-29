import type { FC } from 'react';
import React from 'react';

import ErrorLabel from '../../atoms/ErrorLabel';
import FieldGroup from '../../atoms/FieldGroup';
import InfoLabel from '../../atoms/InfoLabel';
import type { FieldContainerProps } from './FieldContainer.types';

const FieldContainer: FC<FieldContainerProps> = ({ label, error, children }) => (
    <FieldGroup>
        <InfoLabel label={label} />
        {children}
        <ErrorLabel error={error} />
    </FieldGroup>
);

export default FieldContainer;
