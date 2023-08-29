import type { PickPartial } from '@shared/lib/types/utilTypes';

import type { FieldContainerProps } from '../../FieldContainer';
import type { FormFieldProps } from '../FormFields.types';

//Registration is done not explicitly and passed down using {...rest}
export type InputProps = PickPartial<Omit<FieldContainerProps, 'children'>, 'error'> & Pick<FormFieldProps, 'name'>;
