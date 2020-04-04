import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDHbzaKltJDI3-ujffSPul4Bp0P9XfYQ3Y",
    authDomain: "clothing-store-cf9d0.firebaseapp.com",
    databaseURL: "https://clothing-store-cf9d0.firebaseio.com",
    projectId: "clothing-store-cf9d0",
    storageBucket: "clothing-store-cf9d0.appspot.com",
    messagingSenderId: "396016640056",
    appId: "1:396016640056:web:1eacc790b85d8e432c06cd"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

