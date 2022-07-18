import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCxLaqgYrwiBmX_J8XkYJcKp0dBDUfLAp0",
  authDomain: "lab3-13761.firebaseapp.com",
  databaseURL: "https://lab3-13761-default-rtdb.firebaseio.com",
  projectId: "lab3-13761",
  storageBucket: "lab3-13761.appspot.com",
  messagingSenderId: "104678418086",
  appId: "1:104678418086:web:c59ab1d48b01053864f667",
  measurementId: "G-FST0207QQT"
});

export const auth = app.auth();
export const db = firebase.firestore();
export const storageRef = app.storage().ref();
export default firebase;
