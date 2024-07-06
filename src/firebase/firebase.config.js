// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJbwlouVRP-J7rXbz8sYOfSlndDkhCEj4",
  authDomain: "art-and-craft-705cb.firebaseapp.com",
  projectId: "art-and-craft-705cb",
  storageBucket: "art-and-craft-705cb.appspot.com",
  messagingSenderId: "841907296368",
  appId: "1:841907296368:web:b904ec71c686012a623cb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default auth