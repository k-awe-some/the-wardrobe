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

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
// always show Google pop up with list of accounts to choose from

export const signInWithGoogleMethod = () => auth.signInWithPopup(provider);

export default firebase;
