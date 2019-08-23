import React from "react";

import CATEGORIES_DATA from "./categories.data";
import "./categories.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

class Categories extends React.Component {
  state = {
    categories: CATEGORIES_DATA
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
              <CustomButton text="shop now" />
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Categories;
