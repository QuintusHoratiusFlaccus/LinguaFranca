import type { InputHTMLAttributes } from 'react';

import type { Register } from '../../../lib/types/ReactHookForm';

export type InputProps = { name: string } & Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> & Register;
