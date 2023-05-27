import { useState, useEffect } from 'react';
import './BackgroundSlider.css';
import imageSlide from './data';

const BackgroundSlider = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 2) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '1080px',
    width: '1080px',
    transform: 'scale(1.1)',
  };

  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };
  return (
    <div className="container-style">
      <div style={bgImageStyle}></div>
      <div className="transparent-background"></div>
      <div className="description">
        <div>
          <h1>{imageSlide[currentState].title}</h1>
          <p>{imageSlide[currentState].body}</p>
        </div>
        <div className="carrousel-boult">
          {imageSlide.map((imageSlide, currentState) => (
            <span
              className="spamy"
              key={currentState}
              onClick={() => goToNext(currentState)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
