import styled from "styled-components";

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
`;
export const Right = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const OrdersList = styled.div`
  width: 60%;
  background: #edf2f4;
  display: flex;
  flex-direction: column;
  height: 90%;
  overflow: scroll;
`;

export const Title = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 25px;
  justify-content: center;
  margin-bottom: 15px;
  margin-top:15px;
`;

export const OrderItem = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  margin-left:25px;
  margin-top:5px;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 20%;
  margin-right: 10px;
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
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HorRule = styled.hr`
  width:90%;
  margin:10px auto;
`;
