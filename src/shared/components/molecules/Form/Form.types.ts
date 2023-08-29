import type { PropsWithChildren } from 'react';
import type { SubmitHandler, UseFormProps } from 'react-hook-form';
import type { ObjectSchema } from 'yup';

export type FormProps<T extends { [key: string]: any } = { [key: string]: any }> = Readonly<{
    onSubmit: SubmitHandler<T>;
    validationSchema: ObjectSchema<T>;
}> &
    Pick<UseFormProps<T>, 'defaultValues'> &
    PropsWithChildren;
