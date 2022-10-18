// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzZ5_qb0T-s9ez7JiW42dt9bCu46upXts",
  authDomain: "fir-authentication-ab6d6.firebaseapp.com",
  projectId: "fir-authentication-ab6d6",
  storageBucket: "fir-authentication-ab6d6.appspot.com",
  messagingSenderId: "598297478752",
  appId: "1:598297478752:web:8a8a502da384189ba1a505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;