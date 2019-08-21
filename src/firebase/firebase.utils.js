import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDqbhAtx6qUfGwxNA1lfsb8UrVsqFcmGtQ",
  authDomain: "the-wardrobe-database.firebaseapp.com",
  databaseURL: "https://the-wardrobe-database.firebaseio.com",
  projectId: "the-wardrobe-database",
  storageBucket: "",
  messagingSenderId: "293629540839",
  appId: "1:293629540839:web:cf1c31093d5e18c8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
// always show Google pop up with list of accounts to choose from

export const signInWithGoogleMethod = () => auth.signInWithPopup(provider);

export default firebase;
