import { useEffect } from 'react';
const Preloader = () => {
  useEffect(() => {
    setTimeout(() => {
      $("#loader-fade").fadeOut(800);
    }, 4000);
  }, []);
  return <div className="loader" id="loader-fade">
      <div className="dot-container">
        <div className="dot dot-1" />
        <div className="dot dot-2" />
        <div className="dot dot-3" />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" />
          </filter>
        </defs>
      </svg>
    </div>;
};
export default Preloader;