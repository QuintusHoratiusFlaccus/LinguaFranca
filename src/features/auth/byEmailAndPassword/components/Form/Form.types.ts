import type { FIELD } from './Form.constant';

export type LoginByEmailAndPassword = Readonly<{ [FIELD.EMAIL]: string; [FIELD.PASSWORD]: string }>;
