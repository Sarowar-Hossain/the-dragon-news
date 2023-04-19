// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiISsTAAFK7VG6QmOLJeA2hfNH-utapP4",
  authDomain: "the-deagon-news-client.firebaseapp.com",
  projectId: "the-deagon-news-client",
  storageBucket: "the-deagon-news-client.appspot.com",
  messagingSenderId: "836638151212",
  appId: "1:836638151212:web:d406898456deb3aed6f789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;