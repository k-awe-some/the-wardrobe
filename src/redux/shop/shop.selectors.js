import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  selectShop,
  shop => shop.collections
);

// convert collections obj into array
export const selectCollectionsForPreview = createSelector(
  selectCollections,
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    selectCollections,
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectIsFetchingCollections = createSelector(
  selectShop,
  shop => shop.isFetching
);

export const selectAreCollectionsLoaded = createSelector(
  selectShop,
  shop => Boolean(shop.collections)
);
