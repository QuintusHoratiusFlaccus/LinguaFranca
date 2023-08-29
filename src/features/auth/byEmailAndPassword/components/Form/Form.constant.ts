import type { LoginByEmailAndPassword } from './Form.types';

export enum FIELD {
    EMAIL = 'email',
    PASSWORD = 'password',
}
export const DEFAULT_VALUES: LoginByEmailAndPassword = { [FIELD.EMAIL]: '', [FIELD.PASSWORD]: '' };
