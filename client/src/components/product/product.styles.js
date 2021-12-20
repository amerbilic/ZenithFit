import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }

  ${mobile({
    minWidth: "150px",
    height: "150px",
  })}

  ${tablet({
    minWidth: "200px",
    height: "200px",
  })}

${tablet({
    minWidth: "280px",
    height: "350px",
  })}
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;

  ${mobile({ display: "none" })}
`;

export const Image = styled.img`
  height: 99%;
  width: 99%;
  z-index: 2;
  object-fit: cover;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #5dfdcb;
    transform: scale(1.1);
  }
`;

export const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  font-size: 18px;
  justify-content: flex-end;
  align-items: center;
`;

export const Price = styled.span`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: crimson;
  font-weight: 500;
  padding-right: 5px;
`;

export const Name = styled.span`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  font-weight: 500;
`;

export const MainContainer = styled.div`
  flex: 1;
`;

export const CollectionStar = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
`;
