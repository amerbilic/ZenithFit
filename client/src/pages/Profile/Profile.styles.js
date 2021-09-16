import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

export const Navigation = styled.div`
  width: 50%;
  height: 90%;
  background: #edf2f4;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const TitleLeft = styled.h2`
  display: flex;
  justify-content: flex-start;
  padding: 20px 0px 10px 30px;
`;

export const TitleRight = styled.h1`
  display: flex;
  justify-content: flex-start;
`;

export const OrderTitle = styled.h2`
  padding: 10px 0px 10px 30px;
`;

export const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
  list-style: none;
`;

export const Icon = styled.div`
  display: flex;
  padding-right: 20px;
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
  padding-top: 10px;
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
  }
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
  }
`;

export const RecentOrderList = styled.div`
  display: flex;
  justify-content: center;
`;

export const RecentOrderItem = styled.div`
  display:flex;
`;
