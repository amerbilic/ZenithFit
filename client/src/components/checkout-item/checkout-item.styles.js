import styled from "styled-components";

export const Item = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 5px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ItemDescription = styled.span`
  width: 23%;
  display: flex;
  justify-content: center;
`;
export const RemoveButton = styled.div`
  width: 8%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

export const Arrow = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;
