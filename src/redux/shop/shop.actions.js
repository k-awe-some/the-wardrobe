export const shopActionTypes = {
  UPDATE_COLLECTIONS: "UPDATE_COLLECTIONS"
};

export const updateCollections = collectionsMap => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
