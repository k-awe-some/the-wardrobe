import React from "react";

import categories from "./categories.data";
import "./categories.styles.scss";

class Categories extends React.Component {
  state = {
    categories: categories
  };

  render() {
    const { categories } = this.state;
    return (
      <ul className="categories">
        {categories.map(section => (
          <li
            className="categories__section"
            key={section.id}
            style={{
              backgroundImage: `url('${section.imageUrl}')`
            }}
          >
            <div className="categories__section--boxed">
              <h3>{section.title.toUpperCase()}</h3>
              <button className="test">shop now</button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Categories;
