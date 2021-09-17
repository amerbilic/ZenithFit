import React from "react";
import styled from "styled-components";
import DirectoryItem from "../directory-item/directoryItem";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Directory = () => {
  const directory = useSelector((state) => state.directory.directoryItems);

  return (
    <Container>
      {directory.map((item) => (
        <DirectoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Directory;
