import React from 'react';
import './App.scss';
import Carousel from './components/Carousel';

interface State {
  images: string[];
  itemWidth: number;
  frameSize: number;
  step: number;
  animationDuration: number;
}

class App extends React.Component<{}, State> {
  state = {
    images: [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ],
    step: 3,
    frameSize: 3,
    itemWidth: 130,
    animationDuration: 1000,
  };

  handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (id !== 'images') {
      this.setState({ [id]: Number(value) } as Omit<State, 'images'>);
    }
  };

  render() {
    const { images, step, itemWidth, frameSize, animationDuration } =
      this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1 data-cy="title">Carousel with {images.length} images</h1>

        <Carousel
          images={images}
          step={step}
          frameSize={frameSize}
          itemWidth={itemWidth}
          animationDuration={animationDuration}
          infinite={false}
        />

        <label htmlFor="itemId">itemWidth:</label>
        <input
          id="itemId"
          type="number"
          value={itemWidth}
          onChange={this.handleChangeInput}
        />

        <label htmlFor="frameId">frameSize:</label>
        <input
          id="frameId"
          type="number"
          value={frameSize}
          onChange={this.handleChangeInput}
        />

        <label htmlFor="stepId">step:</label>
        <input
          id="stepId"
          type="number"
          value={step}
          onChange={this.handleChangeInput}
        />

        <label htmlFor="animationDuration">animationDuration:</label>
        <input
          id="animationDuration"
          type="number"
          value={animationDuration}
          onChange={this.handleChangeInput}
        />
      </div>
    );
  }
}

export default App;
