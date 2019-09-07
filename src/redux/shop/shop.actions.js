import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const shopActionTypes = {
  FETCH_COLLECTIONS_START: "FETCH_COLLECTIONS_START",
  FETCH_COLLECTIONS_SUCCESS: "FETCH_COLLECTIONS_SUCCESS",
  FETCH_COLLECTIONS_FAILURE: "FETCH_COLLECTIONS_FAILURE"
};

// this function takes in no payload
// as all it does is initialize the isFetching state of shop collections
export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = collectionsMap => {
  return dispatch => {
    const collectionRef = firestore.collection("collections"); // create collectionRef
    dispatch(fetchCollectionsStart()); // switch shop reducer state isFetching to 'true'

    collectionRef.onSnapshot(async snapshot => {
      try {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      } catch (error) {
        dispatch(fetchCollectionsFailure(error.message));
      }
    });
  };
};
