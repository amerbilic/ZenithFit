import "./nav-dropdown-item.styles.scss";
import { Link } from "react-router-dom";

const NavDropDownItem = (props) => {
  return (
    <Link to={`/shop/${props.link.toLowerCase()}`} className="nav-menu-item disable-select">
      {props.children}
    </Link>
  );
};

export default NavDropDownItem;
