import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../../../responsive";

const ItemContainerStyles = css`
  font-size: 14px;
  cursor: pointer;
  color: white;
  margin-left: 25px;
  transition: all 0.3s ease-out;

  &:hover {
    color: #5dfdcb;
    transition: all 0.3s ease-out;
  }
`;

const LinkLogoStyles = css`
  font-size: 2em;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease-out;

  &:hover {
    color: #5dfdcb;
    transition: all 0.3s ease-out;
  }

  ${mobile({
    fontSize: "14px",
    display: "flex",
  })}
`;

export const Container = styled.div`
  height: 65px;
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  color: white;
  ${mobile({
    height: "60px",
  })}
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: "10px 10px",
  })}
`;

export const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display:"none"
  })}
`;

export const SearchContainer = styled.div`
  border: none;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({
    display:"none"
  })}
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    justifyContent: "center",
  })}
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

export const LinkLogo = styled(Link)`
  ${LinkLogoStyles}
`;

export const LinkItem = styled(Link)`
  ${ItemContainerStyles}
`;
