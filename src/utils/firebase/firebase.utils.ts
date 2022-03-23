import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  Auth,
  signInWithRedirect,
} from "firebase/auth";

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAYAbo65mY08quMBE9MjtzSwOLYBMcCLRg",
  authDomain: "react-crwn-clothing-db-31e3a.firebaseapp.com",
  projectId: "react-crwn-clothing-db-31e3a",
  storageBucket: "react-crwn-clothing-db-31e3a.appspot.com",
  messagingSenderId: "633522564810",
  appId: "1:633522564810:web:7680b581a9864728370e33",
};

const firebase: FirebaseApp = initializeApp(firebaseConfig);

const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth: Auth = getAuth(firebase);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: any) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error: unknown) {
      if (error instanceof Error)
        console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
