import React, { useState } from 'react';
import './Carousel.scss';

type Props = {
  images: string[];
  step: number;
  frameSize: number;
  itemWidth: number;
  animationDuration: number;
  infinite: boolean;
};

const Carousel: React.FC<Props> = ({
  images,
  step,
  frameSize,
  itemWidth,
  animationDuration,
  infinite,
}) => {
  const [valueX, setValueX] = useState(0);
  const [countStepPrev, setCountStepPrev] = useState(-1);
  const [countStepNext, setCountStepNext] = useState(
    Math.floor(images.length / step - 1),
  );
  const correctStepPrev = countStepPrev !== 0 ? step : images.length % step;
  const correctStepNext = countStepNext !== 0 ? step : images.length % step;

  return (
    <div
      className="Carousel"
      style={
        {
          '--x': `${valueX}px`,
          '--size-image': `${itemWidth}px`,
          '--frame-size': frameSize,
          '--animation-duration': `${animationDuration}ms`,
        } as React.CSSProperties
      }
    >
      <ul className="Carousel__list">
        {images.map((img, index) => (
          <li key={index}>
            <img src={img} alt={`${index + 1}`} />
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() =>
          setValueX(prev => {
            {
              setCountStepPrev(countStepPrev - 1);
              setCountStepNext(countStepNext + 1);
              if (infinite) {
                return prev < 0
                  ? prev + itemWidth * correctStepPrev
                  : -itemWidth * (images.length - frameSize);
              }

              return prev < 0 ? prev + itemWidth * correctStepPrev : prev;
            }
          })
        }
      >
        Prev
      </button>
      <button
        type="button"
        data-cy="next"
        onClick={() =>
          setValueX(prev => {
            setCountStepPrev(countStepPrev + 1);
            setCountStepNext(countStepNext - 1);
            if (infinite) {
              return prev > -itemWidth * (images.length - frameSize)
                ? prev - itemWidth * correctStepNext
                : 0;
            }

            return prev > -itemWidth * (images.length - frameSize)
              ? prev - itemWidth * correctStepNext
              : prev;
          })
        }
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
