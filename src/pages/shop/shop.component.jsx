import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollections } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const Shop = ({ collections }) => {
  return (
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
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(Shop);
