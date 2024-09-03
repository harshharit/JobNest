// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "process.env.GOOGLE_API_KEY",
  authDomain: "jonnest-f205a.firebaseapp.com",
  projectId: "jonnest-f205a",
  storageBucket: "jonnest-f205a.appspot.com",
  messagingSenderId: "969311220238",
  appId: "1:969311220238:web:a1db5f2de7021eb43f825f",
  measurementId: "G-C8JLEQBE2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;