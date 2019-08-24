import React from "react";
import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class Shop extends React.Component {
  state = {
    collections: SHOP_DATA
  };

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(collection => (
          <div key={collection.id}>
            <CollectionPreview
              title={collection.title}
              items={collection.items}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Shop;
