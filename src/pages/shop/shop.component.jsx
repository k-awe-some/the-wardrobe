import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionContainer from "../collection/collection.container";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

class Shop extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCollectionsStartAsync());
  }

  render() {
    const { match } = this.props;
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
  }
}

export default connect()(Shop);
