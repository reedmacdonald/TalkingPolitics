import "react";
import * as firebase from "firebase";
import "firebase/firestore";
import { KEY } from "./personal";

const config = {
  apiKey: KEY,
  authDomain: "talking-politics.firebaseapp.com",
  databaseURL: "https://talking-politics.firebaseio.com",
  projectId: "talking-politics",
  storageBucket: "talking-politics.appspot.com",
  messagingSenderId: "580317659869",
  appId: "1:580317659869:web:89f76ace8c42b73fa21134",
  measurementId: "G-JHVNDLRHFG",
};

let app;
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export default firebase;

export const db = firebase.database;
