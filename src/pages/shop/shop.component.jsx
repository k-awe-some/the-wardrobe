import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../collection/collection.component";

const Shop = ({ match }) => (
  <React.Fragment>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </React.Fragment>
);

export default Shop;
