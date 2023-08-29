import type { FC } from 'react';

import type { Error } from '@shared/lib/types/Error';

import BaseInput from '../../../atoms/Input/';
import FieldContainer from '../../FieldContainer';

const Input: FC<any> = ({ label, error, ...rest }) => (
    <FieldContainer error={error as Error} label={label}>
        <BaseInput {...rest} error={error as Error} />
    </FieldContainer>
);

export default Input;
