import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOKMGLQC74JqmipwWOxkGhiJGPlDRwvs4",
  authDomain: "crwn-clothing-db-fdff3.firebaseapp.com",
  projectId: "crwn-clothing-db-fdff3",
  storageBucket: "crwn-clothing-db-fdff3.appspot.com",
  messagingSenderId: "320805940689",
  appId: "1:320805940689:web:71fbaacb4a1d15604984f0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  promot: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
