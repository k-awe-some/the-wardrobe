import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./categories.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { selectDirectoryCategories } from "../../redux/directory/directory.selectors";

const Categories = ({ categories, history, match }) => (
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
          <CustomButton
            text="shop now"
            onClick={() => history.push(`${match.url}${section.linkUrl}`)}
          />
        </div>
      </li>
    ))}
  </ul>
);
const mapStateToProps = createStructuredSelector({
  categories: selectDirectoryCategories
});

export default withRouter(connect(mapStateToProps)(Categories));
