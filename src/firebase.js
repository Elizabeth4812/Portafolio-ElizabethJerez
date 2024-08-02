// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjdKsN02YoGjh3C27jAnBcho9FfLwAkd0",
  authDomain: "portafolio-ely-a8f8f.firebaseapp.com",
  projectId: "portafolio-ely-a8f8f",
  storageBucket: "portafolio-ely-a8f8f.appspot.com",
  messagingSenderId: "137549018089",
  appId: "1:137549018089:web:e9455ad1a4a678279d9178"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };