import Button from "../Button/button";
import { useHistory } from "react-router-dom";
import { Container, Title, Paragraph, ButtonsDiv } from "./hero.styles";

const Hero = () => {
  const history = useHistory();
  return (
    <Container>
      <Title>UP TO 60% OFF THIS WEEK</Title>
      <Paragraph>What are you waiting for?</Paragraph>
      <ButtonsDiv>
        <Button hero={true} onClick={() => history.push("/shop")}>START SHOPPING</Button>
      </ButtonsDiv>
    </Container>
  );
};

export default Hero;
