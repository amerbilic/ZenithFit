import "./navitem.styles.scss";
import React, { useState } from "react";

const Navitem = (props) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [isChildFocused, setIsChildFocused] = useState(false);

  const toggleOff = () => {
    setToggleDropdown(false);
  }; 

  return (
    <li className="nav-item disable-select">
      <div
        className="nav-item-button disable-select"
        onMouseEnter={() => {
          setToggleDropdown(!toggleDropdown);
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            if (!isChildFocused) setToggleDropdown(!toggleDropdown);
          }, 300);
        }}
      >
        {props.name}
      </div>
      {toggleDropdown &&
        React.cloneElement(props.children, {
          toggleOff,
          toggleDropdown,
          setIsChildFocused,
        })}
    </li>
  );
};

export default Navitem;
