import type { FieldError } from 'react-hook-form';

export type WithError = Readonly<{
    error: FieldError | FieldError[];
}>;
