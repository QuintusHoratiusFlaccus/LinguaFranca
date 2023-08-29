import { createUserWithEmailAndPassword } from '@firebase/auth';
import type { FC } from 'react';
import React from 'react';

import Button from '@shared/components/atoms/Button';
import BaseForm from '@shared/components/molecules/Form';
import Input from '@shared/components/molecules/FormFields/Input';
import { auth } from '@shared/config/firebase';

import { DEFAULT_VALUES } from './Form.constant';
import type { LoginByEmailAndPassword } from './Form.types';
import { validationSchema } from './Form.validation';

const Form: FC = () => {
    const handleLogin = async ({ email, password }: LoginByEmailAndPassword) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            //Change to notification
            console.log(error);
        }
    };

    return (
        <BaseForm<LoginByEmailAndPassword>
            onSubmit={handleLogin}
            defaultValues={DEFAULT_VALUES}
            validationSchema={validationSchema}
        >
            <Input label="Email" name="email" />
            <Input label="Password" name="password" />
            <Button type="submit">Submit</Button>
        </BaseForm>
    );
};

export default Form;
