import {ButtonContainer} from './button.styles';

const Button = (props) => {
  return (
    <ButtonContainer {...props}>
      {props.children}
    </ButtonContainer>
  );
};

export default Button;
