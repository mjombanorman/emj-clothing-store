import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCKH1Su5PksdYXd6z6niC52Fm3XECQJPQg",
  authDomain: "emj-clothing-db.firebaseapp.com",
  projectId: "emj-clothing-db",
  storageBucket: "emj-clothing-db.appspot.com",
  messagingSenderId: "416217175116",
  appId: "1:416217175116:web:74d599909e9ca0d91110e9",
  measurementId: "G-Y2LBDS1SVR",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" }); // Typo corrected here, should be 'select_account'
const signInWithGoogle = () => signInWithPopup(auth, provider);

export { auth, firestore, signInWithGoogle };
export default firebaseApp;
