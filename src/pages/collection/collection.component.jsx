import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

// import CollectionItem from "../../components/collection-item/collection-item.component";

const Collection = ({ collection }) => (
  <div>
    <h2>Collection page</h2>
  </div>
);
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
