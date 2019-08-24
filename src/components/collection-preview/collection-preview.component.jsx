import React from "react";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="preview">
    <h3 className="preview__title">{title}</h3>
    <div className="preview__items">
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <div key={item.id}>
            <div
              className="background"
              style={{ backgroundImage: `url('${item.imageUrl}')` }}
            ></div>
          </div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
