import React from "react";
import {Container, Image,Info,Title,Button} from './directoryItem.styles'


function DirectoryItem(props) {
  return (
    <Container>
      <Image src={props.item.imageUrl} />
      <Info>
        <Title>{props.item.title.toUpperCase()}</Title>
        <Button
          to={
            props.gender
              ? `${props.gender}/${props.item.linkUrl}`
              : `${props.item.linkUrl}`
          }
        >
          SHOP NOW
        </Button>
      </Info>
    </Container>
  );
}

export default DirectoryItem;
