// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIUkfnuXURhOA1SWf_bfTg-EwjndYmZpE",
  authDomain: "blogging-app-aa4cb.firebaseapp.com",
  projectId: "blogging-app-aa4cb",
  storageBucket: "blogging-app-aa4cb.appspot.com",
  messagingSenderId: "693153492331",
  appId: "1:693153492331:web:08094b6a62692d4e7f302e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);