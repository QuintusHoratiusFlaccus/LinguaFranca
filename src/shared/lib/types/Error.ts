import type { FieldError } from 'react-hook-form';

export type Error = FieldError;
export type WithError = {
    error: Error;
};
