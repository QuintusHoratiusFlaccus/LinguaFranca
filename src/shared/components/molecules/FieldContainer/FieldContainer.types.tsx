import type { PropsWithChildren } from 'react';

import type { ErrorLabelProps } from '../../atoms/ErrorLabel';
// import type { FieldGroupProps } from '../../atoms/FieldGroup';
import type { InfoLabelProps } from '../../atoms/InfoLabel';

export type FieldContainerProps = Pick<ErrorLabelProps, 'error'> & Pick<InfoLabelProps, 'label'> & PropsWithChildren;
