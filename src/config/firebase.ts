// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6z0y1rL9fcMxnjiHF5OmR6KbUZXVQ81U",
  authDomain: "react-social-44a6b.firebaseapp.com",
  projectId: "react-social-44a6b",
  storageBucket: "react-social-44a6b.appspot.com",
  messagingSenderId: "535136524069",
  appId: "1:535136524069:web:8729e7cef062f87916accc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
