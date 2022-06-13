// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAByeoQsqYS0JQ9Vi1xnKmuqe-_jzMeJok",
  authDomain: "huellitas-proyecto-reactjs.firebaseapp.com",
  projectId: "huellitas-proyecto-reactjs",
  storageBucket: "huellitas-proyecto-reactjs.appspot.com",
  messagingSenderId: "255372516237",
  appId: "1:255372516237:web:bb1a916755ea6eeb82fbc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Firestore initialize 
const db = getFirestore(app)

export default db