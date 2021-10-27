import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
export const Left = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  right: 30px;
  margin-top: 50px;
  position: relative;

  ${mobile({
    width:'50%',
    right:"20px"
  })}

`;
export const Right = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  ${mobile({
    width: "50%"
  })}
`;

export const OrdersList = styled.div`
  width: 60%;
  background: #edf2f4;
  display: flex;
  flex-direction: column;
  height: 90%;
  overflow: scroll;

  ${mobile({
    width: "90%"
  })}
`;

export const Title = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 25px;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: 15px;

  ${mobile({
    fontSize:20
  })}
`;

export const OrderItem = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 25px;
  margin-top: 5px;

  ${mobile({
    flexDirection:"column",
    margin:"0"
  })}
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 20%;
  margin-right: 10px;
  border:1px solid black;
  ${mobile({
    display: "none"
  })}
`;

export const OrderNumber = styled.div`
  display: block;
  font-weight: 500;
  font-size: 17px;
  flex-wrap: wrap;
  padding: 10px 15px 10px 15px;
`;

export const Price = styled.div`
  font-weight: 400;
  color: teal;

  ${mobile({
    fontWeight: "800"
  })}
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

   ${mobile({
    width: "50%"
  })}
`;

export const HorRule = styled.hr`
  width: 90%;
  margin: 10px auto;
`;

export const OrderButton = styled(Link)`
  height: 45px;
  align-items: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-out;
  background-color: black;
  color: white;
  border: 1px solid black;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;

  &:hover {
    background: var(--bg-highlight);
    color: black;
    transition: all 0.3s ease-out;
  }

  ${mobile({
    height: "40px",
    alignItems:"center",
    fontSize:"14px",
    padding:"0",
    width:"120px",
    margin:"10px"
  })}
`;
