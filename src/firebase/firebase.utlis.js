import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";

import firebaseConfig from "./firebaseConfig";

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => signInWithPopup(auth, provider);

export { auth, firestore, signInWithGoogle };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return null;

  const userRef = doc(firestore, `users/${userAuth.uid}`);

  try {
    // Check if the document exists
    const docSnapshot = await getDoc(userRef);

    if (docSnapshot.exists()) {
      // If the document exists, return the reference
      return userRef;
    } else {
      // If the document does not exist, create it and return the reference
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
      return userRef;
    }
  } catch (error) {
    console.error("Error creating user profile document:", error);
    return null;
  }
};

export const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Handle successful user creation
    console.log("User created successfully:", user);

    // Store user data, redirect, etc.
  } catch (error) {
    console.error("Error creating user:", error.code, error.message);

    // Handle errors (display message, log details)
  }
};

export default firebaseApp;
