import styled from "styled-components";
import { mobile } from "../../responsive";

export const Details = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px 0;
`;

export const BigImage = styled.div`
  max-width: 500px;
  min-width: 290px;
  max-height: 500px;
  overflow: hidden;
  margin: 25px;
`;
export const BigImageChild = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export const Box = styled.div`
  max-width: 500px;
  min-width: 290px;
  margin: 25px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mobile({
    padding: "0",
    fontSize: "25px",
  })}
`;

export const Paragraph = styled.p`
  line-height: 1.5;
  margin: 15px 0;
  font-size: 20px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Span = styled.span`
  color: crimson;
  font-size: 30px;
`;

export const Button = styled.button`
  border: 1px solid #333;
  outline: none;
  cursor: pointer;
  align-items: center;
  align-self: center;
  margin-top: 30px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const ProductHR = styled.hr`
  width: 100%;
  border-width: 0.5px;
  border-style: solid;
  border-color: #ccc;
  margin: 10px 0px;
`