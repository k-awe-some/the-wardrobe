import React, { useState } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionContainer from "../collection/collection.container";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const Shop = ({ match, dispatch }) => {
  useState(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </React.Fragment>
  );
};

export default connect()(Shop);
