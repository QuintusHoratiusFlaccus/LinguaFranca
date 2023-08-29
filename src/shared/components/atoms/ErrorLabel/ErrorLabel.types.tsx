import type { HTMLAttributes } from 'react';

import type { WithError } from '@shared/lib/types/Error';

export type ErrorLabelProps = HTMLAttributes<HTMLLabelElement> & WithError;
