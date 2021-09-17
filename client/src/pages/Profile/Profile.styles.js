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

export const TitleRight = styled.h1`
  display: flex;
  justify-content: flex-start;
`;

export const OrderTitle = styled.h2`
  margin: 20px 0px 10px 15px;
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
`;

export const Text = styled.span`
  font-weight: 500;
`;

export const RecentOrders = styled.div`
  width: 60%;
  background: #edf2f4;
  display: flex;
  flex-direction: column;
  height: 67.6%;
`;

export const RecentOrderList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
export const RecentOrderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  margin-bottom: 15px;
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
  height: 100%;
  width: 20%;
  margin-right: 10px;
`;
