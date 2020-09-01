import React from 'react';
import {
  Link,
} from 'react-router-dom';
import cartoonBackground from '../../static/assets/images/cartoon_characters.jpg';

const Home = () => (
  <div id="main">
    <div className="container mx-auto text-center">
      <h1 className="text-6xl">Cartoon Character Quiz</h1>
    </div>
    <div className="container mx-auto text-center">
      <Link to="/quiz"><button type="button" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full"><span className="text-3xl">Start Quiz</span></button></Link>
    </div>
    <img alt="Cartoon Background" src={cartoonBackground} />
  </div>
);

export default Home;
