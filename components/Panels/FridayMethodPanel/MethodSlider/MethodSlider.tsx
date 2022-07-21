import { forwardRef, useState } from 'react';
import Slider from 'react-slick';

import styles from './MethodSlider.module.scss';

import { LeftArrow } from '../../../Arrows';

interface MethodSliderProps {
  discovery: string;
  strategy: string;
  design: string;
}

const MethodSlider = forwardRef(
  (
    { discovery, strategy, design }: MethodSliderProps,
    ref: React.RefObject<Slider>
  ): JSX.Element => {
    const [slideConter, setSlideCounter] = useState('1/3');
    const settings = {
      cssEase: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
      speed: 600,
      fade: true,
      arrows: false,
      beforeChange: (current: number, next: number) => setSlideCounter(`${next + 1}/3`),
    };

    const handleNextClick = () => ref.current.slickNext();

    return (
      <>
        <Slider ref={ref} {...settings}>
          <div>
            <h3>Discovery</h3>
            <p>{discovery}</p>
          </div>
          <div>
            <h3>Strategy</h3>
            <p>{strategy}</p>
          </div>
          <div>
            <h3>Design</h3>
            <p>{design}</p>
          </div>
        </Slider>

        <div className={styles.nav}>
          <div className={styles.counter}>{slideConter}</div>

          <LeftArrow handleClick={handleNextClick} />
        </div>
      </>
    );
  }
);

export default MethodSlider;
