import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDHnUoFF4Zm9vAgma1O2O5wcbIwbM9KCDM",
  authDomain: "e-commerce-project-2-7ee00.firebaseapp.com",
  projectId: "e-commerce-project-2-7ee00",
  storageBucket: "e-commerce-project-2-7ee00.appspot.com",
  messagingSenderId: "822333542993",
  appId: "1:822333542993:web:a18215ee87eee7f2761e70",
  measurementId: "G-QTR1GNVEZ4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
