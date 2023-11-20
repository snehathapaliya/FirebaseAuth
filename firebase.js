// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf9_bqvIwKO-zbyTadRzzRrpy6f7kGcCI",
  authDomain: "quiz-a-f8dfd.firebaseapp.com",
  projectId: "quiz-a-f8dfd",
  storageBucket: "quiz-a-f8dfd.appspot.com",
  messagingSenderId: "887201544158",
  appId: "1:887201544158:web:1ebce7f11af26fc7da0f4f",
  measurementId: "G-FSXQ2PW9BJ"
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app)

export default auth;