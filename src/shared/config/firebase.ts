import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBYyJiYXbmDn6cZ7hXDnlob6wkoTp6D5wQ',
    authDomain: 'linguafranca-3348c.firebaseapp.com',
    projectId: 'linguafranca-3348c',
    storageBucket: 'linguafranca-3348c.appspot.com',
    messagingSenderId: '427702592129',
    appId: '1:427702592129:web:0943b6b283abcc84a7a380',
    measurementId: 'G-EQ96C4JL1N',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, analytics, googleProvider };
