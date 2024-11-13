import { initializeApp } from "firebase/app";
import {getFirestore, collection,addDoc} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: `${import.meta.env.VITE_APP_API_KEY}`,
    authDomain:`${import.meta.env.VITE_APP_AUTH_DOMAIN}`,
    projectId: `${import.meta.env.VITE_APP_PROJECT_ID}`,
    storageBucket: `${import.meta.env.VITE_APP_STORAGE_BUCKET}`,
    messagingSenderId: `${import.meta.env.VITE_APP_MESSAGING_SENDER_ID}`,
    appId: `${import.meta.env.VITE_APP_APP_ID}`
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider,db };

export async function submitContactForm(name, mail, message) {
        await addDoc(collection(db, "contactForm"), {
            name,
            mail,
            message
        });}



