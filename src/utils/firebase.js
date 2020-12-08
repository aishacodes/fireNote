import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyABk6mQUOPiIMWSfGiiBYnxKfAZ7lJHlUY",
  authDomain: "firenote-3b4a5.firebaseapp.com",
  databaseURL: "https://firenote-3b4a5-default-rtdb.firebaseio.com/",
  storageBucket: "firenote-3b4a5.appspot.com",
  projectId: "firenote-3b4a5",
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database().ref("fireNotes");
export const auth = firebase.auth();
