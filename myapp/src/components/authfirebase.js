import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAN0TU0ts6gfVRFHVIL86Y0Lmoziiuvef8",
    authDomain: "music-app-54e7a.firebaseapp.com",
    projectId: "music-app-54e7a",
    storageBucket: "music-app-54e7a.appspot.com",
    messagingSenderId: "683771726708",
    appId: "1:683771726708:web:1cfdaa861952d4c702ba21"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
