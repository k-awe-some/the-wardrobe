import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAgYLyrUGv1r1sq5o3JqaoXKdtwuAYgtXI",
  authDomain: "the-wardrobe-boutique.firebaseapp.com",
  databaseURL: "https://the-wardrobe-boutique.firebaseio.com",
  projectId: "the-wardrobe-boutique",
  storageBucket: "",
  messagingSenderId: "12247859322",
  appId: "1:12247859322:web:e9a2fa75a740171f"
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

// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = firestore.collection(collectionKey);
//   const batch = firestore.batch();
//
//   objectsToAdd.forEach(object => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, object);
//   });
//
//   return await batch.commit(); // returns a promise
// };

export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
  const transformedCollection = collectionsSnapshot.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
// always show Google pop up with list of accounts to choose from

export const signInWithGoogleMethod = () => auth.signInWithPopup(provider);

export default firebase;
