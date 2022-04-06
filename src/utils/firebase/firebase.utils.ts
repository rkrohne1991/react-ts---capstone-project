import {
  FirebaseApp,
  FirebaseError,
  FirebaseOptions,
  initializeApp,
} from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  Auth,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";

import {
  collection,
  doc,
  Firestore,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import { Categories } from "../../state/categories";
import { ShopData } from "../../state/shop-data";

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

export const db: Firestore = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: ShopData[]
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object: any) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  // await Promise.reject(new Error("new error whoops"));
  const querySnapshot = await getDocs(q);
  const mapDocs = querySnapshot.docs.map((doc) => doc.data());

  return mapDocs as Categories[];
};

export const createUserDocumentFromAuth = async (
  userAuth: any,
  additionalInformation: Object = {}
) => {
  if (!userAuth) return;

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
        ...additionalInformation,
      });
    } catch (error: unknown) {
      const err = error as FirebaseError;
      console.log("error creating the user", err.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);
