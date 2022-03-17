import { Button } from '../Button/Button';
import './HeroSection.css';
import video from '../../assets/hero.mp4';

const HeroSection = () => {
  return (
    <header className="hero">
      <video src={video} autoPlay loop muted />
      <h1 className="hero__title">KEEP YOURSELF UPDATED</h1>
      <p className="hero__text">Start searching for news on a desired topic</p>
      <div className="hero__btns">
        <Button link="/search">GET STARTED</Button>
        <Button link="/latest" reverse={true}>
          LATEST NEWS <i className="fa-solid fa-rss" />
        </Button>
      </div>
    </header>
  );
};
export default HeroSection;
