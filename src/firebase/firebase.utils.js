import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBRF_AmJxR5UxcHNOfOpIiJYxzaSoru0Ew",
  authDomain: "the-wardrobe-db.firebaseapp.com",
  databaseURL: "https://the-wardrobe-db.firebaseio.com",
  projectId: "the-wardrobe-db",
  storageBucket: "",
  messagingSenderId: "757364054158",
  appId: "1:757364054158:web:b7742eac277328fc"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
// always show Google pop up with list of accounts to choose from

export const signInWithGoogleMethod = () => auth.signInWithPopup(provider);

export default firebase;
