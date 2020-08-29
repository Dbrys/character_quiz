import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import cartoonBackground from '../static/assets/images/cartoon_characters.jpg';


const App = () => (
  <div className="flex min-h-screen font-sans bg-grey-200">
    <div id="main">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl">Cartoon Character Quiz</h1>
      </div>
      <div className="container mx-auto text-center">
        <button type="button" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full"><span className="text-3xl">Start Quiz</span></button>
      </div>
      <img alt="Cartoon Background" src={cartoonBackground} />
    </div>
  </div>
);


export default App;
