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

// export const fbConfig = {
//     apiKey: 'AIzaSyCzwR0-KqRLBCndHE0p6hnw0rwdsTBW_Lo',
//     authDomain: 'shopping-basket-71702.firebaseapp.com',
//     databaseURL: 'https://shopping-basket-71702-default-rtdb.europe-west1.firebasedatabase.app',
//     projectId: 'shopping-basket-71702',
//     storageBucket: 'shopping-basket-71702.appspot.com',
//     messagingSenderId: '1095465613430',
//     appId: '1:1095465613430:web:db4b417b368ced5085c757'
// };
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