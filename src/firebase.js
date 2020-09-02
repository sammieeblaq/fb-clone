import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBUcwT9AeWop16J-x0-pdwH6D-TT1d57GU",
  authDomain: "facebook-clone-56a6b.firebaseapp.com",
  databaseURL: "https://facebook-clone-56a6b.firebaseio.com",
  projectId: "facebook-clone-56a6b",
  storageBucket: "facebook-clone-56a6b.appspot.com",
  messagingSenderId: "679616047859",
  appId: "1:679616047859:web:ae84286c2887060a9ba586",
  measurementId: "G-1ZNNCLMW64",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
