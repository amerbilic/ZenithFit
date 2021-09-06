import React, { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = (props) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Fragment>
      <div
        className={`${props.size} menu-item`}
        onClick={() => history.push(`${location.pathname}${props.linkUrl}`)}
      >
        <div
          className="background-image"
          style={{ backgroundImage: `url(${props.imageUrl})` }}
        />
        <div className="content">
          <h1 className="title">{props.title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </Fragment>
  );
};

export default MenuItem;
