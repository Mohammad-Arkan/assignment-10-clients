// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4UE1l8HswMXr97APEPiBgnKWsVUulKCY",
  authDomain: "assignment-10-629ad.firebaseapp.com",
  projectId: "assignment-10-629ad",
  storageBucket: "assignment-10-629ad.appspot.com",
  messagingSenderId: "88086459339",
  appId: "1:88086459339:web:02fd85198ac14d58a7bc4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth= getAuth(app)
export default app;
