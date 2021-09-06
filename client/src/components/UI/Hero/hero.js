import "./hero.styles.scss";
import Button from '../Button/button';
import { useHistory } from "react-router-dom";

const Hero = () => {
  const history= useHistory();
  return (
    <div className="hero-container">
      <h1 className='hero-title'>UP TO 60% OFF THIS WEEK</h1>
      <p className='hero-p'>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button onClick={()=> history.push('/shop')}>
          START SHOPPING
        </Button>
      </div>
    </div>
  );
};

export default Hero;
