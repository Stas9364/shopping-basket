import {initializeApp} from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    addDoc,
    collection,
    updateDoc,
    getDocs,
    doc,
    query
} from "firebase/firestore";

export const fbConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(fbConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    db,
    signOut,
    auth,
    GoogleAuthProvider,
    firebase,
    collection,
    addDoc,
    signInWithPopup,
};