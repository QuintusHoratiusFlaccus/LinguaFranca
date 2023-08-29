import type { FieldValues, UseFormRegister } from 'react-hook-form';

export type FormFieldProps = Readonly<{ register: UseFormRegister<FieldValues>; name: string }>;
