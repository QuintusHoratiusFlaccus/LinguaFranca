import { yupResolver } from '@hookform/resolvers/yup';
import type { ReactElement } from 'react';
import React from 'react';
import type { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { FormProps } from '@shared/components/molecules/Form/Form.types';

const Form = <T extends FieldValues>({ defaultValues, validationSchema, onSubmit, children }: FormProps<T>) => {
    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm<T>({
        defaultValues,
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
        reValidateMode: 'onBlur',
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {React.Children.map(children as ReactElement[], (child: ReactElement) =>
                child?.props?.name
                    ? React.createElement(child.type, {
                          ...{
                              ...child.props,
                              register: register,
                              error: errors[child.props.name],
                              key: child.props.name,
                          },
                      })
                    : child
            )}
        </form>
    );
};

export default Form;
