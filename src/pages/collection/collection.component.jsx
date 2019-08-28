import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  console.log(title, items);
  return (
    <div className="collection">
      <h3>{title.toUpperCase()}</h3>
      <div className="collection__items">
        {items.map(item => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
