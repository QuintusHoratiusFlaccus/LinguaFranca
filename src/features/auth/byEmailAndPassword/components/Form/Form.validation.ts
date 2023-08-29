import * as Yup from 'yup';

import { FIELD } from './Form.constant';

export const validationSchema = Yup.object().shape({
    [FIELD.EMAIL]: Yup.string().required(),
    [FIELD.PASSWORD]: Yup.string().required(),
});
