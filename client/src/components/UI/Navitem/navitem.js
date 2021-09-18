import "./navitem.styles.scss";
import React, { useState } from "react";

const Navitem = (props) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const toggleOff = () => {
    setToggleDropdown(false);
  };

  return (
    <li className="nav-item disable-select">
      <div
        className="nav-item-button disable-select"
        onClick={() => {
          setToggleDropdown(!toggleDropdown);
        }}
      >
        {props.name}
      </div>
      {toggleDropdown &&
        React.cloneElement(props.children, {
          toggleOff,
          toggleDropdown,
        })}
    </li>
  );
};

export default Navitem;
