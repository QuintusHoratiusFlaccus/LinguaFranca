import { signInWithPopup } from '@firebase/auth';

import Button from '@shared/components/atoms/Button';
import { auth, googleProvider } from '@shared/config/firebase';

const AuthByOAuth = () => {
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Button onClick={signInWithGoogle}>
            <img src="/src/shared/lib/favicons/google.svg" alt="Login With Google" />
        </Button>
    );
};

export default AuthByOAuth;
