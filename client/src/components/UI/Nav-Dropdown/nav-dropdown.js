import "./nav-dropdown.styles.scss";
import NavDropDownItem from "../Nav-Dropdown-Item/nav-dropdown-item";
import { useRef, useEffect } from "react";

const NavDropDown = (props) => {
  const navitemRef = useRef(null);
  const items = props.categories;

  const useOutSideAlert = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          props.toggleOff();
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  useOutSideAlert(navitemRef);
  return (
    <div className="nav-dropdown" onClick={props.toggleOff} ref={navitemRef}>
      {props.toggleDropdown &&
        items.map((item, i) => (
          <NavDropDownItem key={i} link={items[i]}>
            {items[i]}
          </NavDropDownItem>
        ))}
    </div>
  );
};

export default NavDropDown;
