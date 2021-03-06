import React from "react";
import styled from "styled-components";
import DirectoryItem from "../directory-item/directoryItem";
import { useSelector } from "react-redux";
import { mobile, tablet } from "../../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({
    padding: "0px",
    flexDirection: "column",
  })}

  ${tablet({
    padding: "10px",
    flexDirection: "column",
  })}

  @media only screen and (min-width:820px) {
    flex-direction: row;
  }
`;

const Directory = (props) => {
  const directory = useSelector((state) => state.directory.directoryItems);

  return (
    <Container>
      {props.items
        ? props.items.map((item) => (
            <DirectoryItem key={item.id} item={item} gender={props.gender} />
          ))
        : directory.map((item) => <DirectoryItem key={item.id} item={item} />)}
    </Container>
  );
};

export default Directory;
