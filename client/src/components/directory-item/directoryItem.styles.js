import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet, large, desktop } from "../../responsive";

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 50vh;
  position: relative;

  ${mobile({
    height: "20vh",
  })}

  ${tablet({
    height: "20vh",
  })}

@media only screen and (min-width:820px)
  {
    height:40vh;
  }

  ${large({
    height: "50vh",
  })}
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  ${mobile({
    height: "20vh",
  })}

  ${tablet({
    height: "20vh",
  })}

  @media only screen and (min-width:820px)
  {
    height:100%;
  }

  ${large({
    height:"100%"
  })}
`;
export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  color: white;
  background-color: black;
  margin: 20px;
  padding: 5px 10px;
  ${mobile({
    margin: "20px",
    fontSize: "14px",
  })}

  ${tablet({
    margin: "0px",
    fontSize: "1.2rem",
  })}

@media only screen and (min-width:820px) {
    margin: 0px;
    font-size: 1.1rem;
  }

  ${large({
    fontSize: "1.1rem",
  })}

  ${desktop({
    fontSize: "1.8rem",
  })}
`;
export const Button = styled(Link)`
  border: none;
  padding: 12px;
  background-color: black;
  cursor: pointer;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #5dfdcb;
    color: black;
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

  ${mobile({
    padding: "5px",
  })}

  ${tablet({
    marginTop: "10px",
    padding: "8px",
  })}
`;
