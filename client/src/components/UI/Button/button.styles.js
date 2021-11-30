import styled, { css } from "styled-components";

export const buttonStyles = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: teal;
    color: white;
    transition: all 0.3s ease-out;
  }
`;

export const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    transition: all 0.3s ease-out;
  }
`;

export const heroButtonStyles = css`
  border: none;
  background-color: black;
  cursor: pointer;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: #5dfdcb;
    color: black;
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

`;

export const collectionButtonStyles = css`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  background-color: black;
  color: white;
  display: none;

  &:hover {
    opacity: 1;
    display: flex;
    background-color: teal;
    color: white;
    transition: all 0.3s ease-out;
  }
`;

export const getButtonStyles = (props) => {
  if (props.inverted) {
    return invertedButtonStyles;
  }
  if (props.hero) {
    return heroButtonStyles;
  }
  return props.collection ? collectionButtonStyles : buttonStyles;
};

export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
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

  ${getButtonStyles}
`;
