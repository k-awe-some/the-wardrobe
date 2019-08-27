import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => (
  <div>
    {collections.map(collection => (
      <div key={collection.id}>
        <CollectionPreview
          title={collection.title.toUpperCase()}
          items={collection.items}
        />
      </div>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionOverview);
