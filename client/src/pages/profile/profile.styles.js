import styled from "styled-components";
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

export const TitleRight = styled.h1`
  display: flex;
  justify-content: flex-start;

  ${mobile({
    fontSize:20
  })}
`;

export const OrderTitle = styled.h2`
  margin: 20px 0px 10px 15px;

  ${mobile({
    fontSize:20,
    margin:"20px 0px 10px 0px"
  })}
`;

export const ProfileBox = styled.div`
  height: 20%;
  width: 60%;
  background: #edf2f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  ${mobile({
    width:"90%",
  })}

  
`;

export const Text = styled.span`
  font-weight: 500;
  ${mobile({
    display:"none"
  })}
`;

export const RecentOrders = styled.div`
  width: 60%;
  background: #edf2f4;
  display: flex;
  flex-direction: column;
  height: 67.6%;
  align-items: center;

  ${mobile({
    width:"90%",
  })}
`;

export const RecentOrderList = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  
`;
export const RecentOrderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  margin-bottom: 15px;
  margin-left:25px;
  margin-top:5px;

  ${mobile({
    margin:"0",
  })}

`;

export const RecentOrderTitle = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 17px;
  flex-wrap: wrap;
  padding: 10px 15px 10px 15px;

`;

export const Image = styled.img`
  object-fit: cover;
  height: 90%;
  width: 15%;
  margin-right: 10px;

  ${mobile({
    display:"none"
  })}
`;

export const HorRule = styled.hr`
  width: 90%;
  margin:5px auto;

  ${mobile({
    width:"85%"
  })}
`;
