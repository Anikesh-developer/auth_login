// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase ,ref , set , update } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDE0hNHAWSrlKyz54gDmDRpJpmQUBbHv8",
  authDomain: "my-front-end-a2220.firebaseapp.com",
  projectId: "my-front-end-a2220",
  storageBucket: "my-front-end-a2220.appspot.com",
  databaseURL: "https://my-front-end-a2220-default-rtdb.firebaseio.com",
  messagingSenderId: "437484248310",
  appId: "1:437484248310:web:aa3ecda1e696bb02b420d7",
  measurementId: "G-5TTP9HJFS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

export { app , auth , db , ref , set , update} ;
