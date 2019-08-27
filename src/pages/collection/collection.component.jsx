import React from "react";

// import CollectionItem from "../../components/collection-item/collection-item.component";

const Collection = ({ match }) => {
  console.log(match.params.collectionId);
  return (
    <div>
      <h2>Collection page</h2>
    </div>
  );
};

export default Collection;
