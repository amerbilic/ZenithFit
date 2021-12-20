import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  transition: background var(--speed);
  justify-content: center;
  color: white;
  font-weight: 500;
  background-color: teal;
  z-index: 2;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  &:hover {
    background: lightseagreen;
    transition: all 0.3s ease-out;
  }
`;

const NavDropDownItem = (props) => {
  return (
    <Wrapper to={`/shop/${props.link.toLowerCase()}`}>{props.children}</Wrapper>
  );
};

export default NavDropDownItem;
