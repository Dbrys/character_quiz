import React from 'react';
import { func } from 'prop-types';

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../../static/assets/images/quiz_images', false, /\.(png|jpe?g|svg)$/));

const getRandomImage = imgs => imgs [Math.floor(Math.random() * Math.floor(imgs.length))];

const characterHeight = {
  marginTop: '15px',
  height: '400px',
  textAlign: 'center',
  position: 'relative',
};

const imgStyle = {
  height: '100%',
  width: 'auto',
  position: 'absolute',
  backgroundColor: 'white',
};

const imgContainer = {
  display: 'flex',
  justifyContent: 'center',
};

const selectionHeight = {
  marginTop: '15px',
  height: '100%',
  textAlign: 'center',
};

const Quiz = () => (
  <div className="container mx-auto">
    <div style={characterHeight}>
      <div style={imgContainer}>
        <img style={imgStyle} alt="Tom" src={getRandomImage(images)} />
      </div>
    </div>
    <div style={selectionHeight} className="border-solid border-4 border-gray-600">
      <form>
        <h2>Selections Go Here</h2>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Tom">
            Tom
          </label>
          <input type="radio" id="Tom" />
        </div>
      </form>
    </div>
  </div>
);

export default Quiz;
