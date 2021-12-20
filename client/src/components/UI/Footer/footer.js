import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {mobile,tablet, large} from '../../../responsive';
import {Link} from 'react-router-dom';

const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection: 'column',
  })}

${tablet({
    flexDirection: 'column',
  })}

  ${large({
    flexDirection: 'row'
  })}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display:"none"
  })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>ZENITH FIT.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem><Link to="/">Home</Link></ListItem>
          <ListItem><Link to="/checkout">Cart</Link></ListItem>
          <ListItem><Link to="/shop/whey%20protein">Protein</Link></ListItem>
          <ListItem><Link to="/shop/pre-workout">Performance</Link></ListItem>
          <ListItem><Link to="/profile">My Account</Link></ListItem>
          <ListItem><Link to="/profile/orders">Order Tracking</Link></ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          622 Imaginary Path, South Winchester 97228
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +387 62 388 722
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          bilic.amer@outlook.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}

export default Footer;
