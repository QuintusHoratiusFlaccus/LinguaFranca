import type { FC } from 'react';
import { useEffect } from 'react';

import { validationSchema } from '@features/auth/byEmailAndPassword/components/Form/Form.validation';

import { auth } from '@shared/config/firebase';

import { initialValues } from './LoginPage.constants';
import { isValidPathname } from './LoginPage.utils';

const LoginPage: FC = () => {
    const isUserLoggedIn = auth.currentUser?.uid;

    const { login: loginMutation } = useLogin();
    const { updateLoginStatus } = useUpdateLoginStatus();
    const { showNotification } = useNotifications();
    const { permissions } = usePermissions();

    const tenant = useSelectCurrentTenant();
    const {
        BRAND_CONFIG: { passwordLabel },
    } = getBrandConfigNew(tenant);

    useEffect(() => {
        dispatch(saveDefaultTenants());
    }, [dispatch, permissions]);

    const handleSubmit = async ({ login, password }: LoginMutationVariables) => {
        try {
            const { data } = await loginMutation({
                login,
                password,
            });

            dispatch(savePermissions(data?.loginByEmailAndPassword?.permissions || []));
            dispatch(authSetLoggedIn(true));
            updateLoginStatus(true);

            if (redirectBackUrl && isValidPathname(redirectBackUrl)) {
                window.location.href = redirectBackUrl;
            }
        } catch (error: any) {
            showNotification(error.message, Severity.Error);
        }
    };

    return (
        <Styled.Wrapper>
            <Styled.ContainerWithBackground
                container
                justifyContent="center"
                alignItems="center"
                className="login-container"
            >
                <Styled.ContentContainer>
                    <AppBox padding={3}>
                        <AppGrid container direction="column" alignItems="center" spacing={2}>
                            <AppGrid item xs>
                                <Styled.ImageWrapper variant="square" src={logoSrc} alt="The Cube" />
                            </AppGrid>

                            <AppGrid item>
                                <Formik<LoginMutationVariables>
                                    initialValues={initialValues}
                                    onSubmit={handleSubmit}
                                    validationSchema={validationSchema}
                                    validateOnBlur={false}
                                    validateOnChange={false}
                                >
                                    <Form noValidate>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="login"
                                            label="Email Address"
                                            name="login"
                                            autoComplete="email"
                                            autoFocus
                                            InputLabelProps={{ shrink: true }}
                                        />

                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            name="password"
                                            label={passwordLabel || 'Password'}
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            InputLabelProps={{ shrink: true }}
                                        />

                                        <Styled.SubmitButton
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                        >
                                            Log In
                                        </Styled.SubmitButton>
                                    </Form>
                                </Formik>
                            </AppGrid>
                        </AppGrid>
                    </AppBox>
                </Styled.ContentContainer>
            </Styled.ContainerWithBackground>
        </Styled.Wrapper>
    );
};

export default LoginPage;
