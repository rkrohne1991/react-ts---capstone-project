import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  Auth,
  UserCredential,
} from "firebase/auth";

import { doc, getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAYAbo65mY08quMBE9MjtzSwOLYBMcCLRg",
  authDomain: "react-crwn-clothing-db-31e3a.firebaseapp.com",
  projectId: "react-crwn-clothing-db-31e3a",
  storageBucket: "react-crwn-clothing-db-31e3a.appspot.com",
  messagingSenderId: "633522564810",
  appId: "1:633522564810:web:7680b581a9864728370e33",
};

const firebase: FirebaseApp = initializeApp(firebaseConfig);

const provider: GoogleAuthProvider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth: Auth = getAuth(firebase);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: any) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
};
