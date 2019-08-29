import React from "react";
import { withRouter } from "react-router-dom";

import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, routeName, history, match }) => (
  <div className="preview">
    <h3
      className="preview__title"
      onClick={() => history.push(`${match.url}/${routeName}`)}
    >
      {title}
    </h3>
    <div className="preview__items">
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
