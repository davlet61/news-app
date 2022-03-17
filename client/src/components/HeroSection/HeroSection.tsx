import { Button } from '../Button/Button';
import './HeroSection.css';
import video from '../../assets/hero.mp4';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1>KEEP YOURSELF UPDATED</h1>
      <p>Start searching for news on a desired topic</p>
      <div className="hero-btns">
        <Button
          type="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={console.log('hey')}
        >
          GET STARTED
        </Button>
        <Button
          type="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log('hey')}
        >
          LATEST NEWS <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};
export default HeroSection;
