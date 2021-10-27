import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";

export const Line = styled.hr`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(204, 204, 204);
  height: 1px;
  font-size: 0px;
  line-height: 0px;
  margin-left: 30px;
  margin-top: 20px;

  ${mobile({
    marginLeft:"10px"
  })}
  
`;

export const Navigation = styled.div`
  width: 50%;
  height: 90%;
  background: #edf2f4;
  display: flex;
  flex-direction: column;
  position: relative;

  ${mobile({
    height:"90%",
    width:"80%"
  })}
`;
export const TitleLeft = styled.h2`
  display: flex;
  justify-content: flex-start;
  padding: 20px 0px 10px 30px;

  ${mobile({
    paddingLeft:"10px",
    fontSize:"20px"
  })}
`;

export const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
  list-style: none;
  
`;

export const Icon = styled.div`
  display: flex;
  padding-right: 10px;
  ${mobile({
    display:"none"
  })}
`;

export const LogoutLink = styled(Link)`
  margin: 15px 0px;
  padding: 10px 10px;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding-left: 40px;

  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background: var(--bg-highlight);
    transition: all 0.3s ease;
  }
  ${mobile({
    paddingLeft:"10px"
  })}
`;

export const NavLink = styled(Link)`
  padding: 10px 0px;
  padding-left: 40px;
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background: var(--bg-highlight);
    transition: all 0.5s ease;
  }

  ${mobile({
    paddingLeft:"10px"
  })}

`;
