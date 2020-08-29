import React from 'react';
import './App.css';

const headerStyle = {
  fontSize: '100px',
  fontFamily: 'Pacifico',
};

const App = () => (
  <div id="main" className="flex-col min-h-screen font-sans bg-grey-200 items-center">
    <div className="container mx-auto text-center">
      <h1 style={headerStyle}>Cartoon Character Quiz</h1>
    </div>
    <div className="container mx-auto text-center">
      <button type="button" className="bg-pink-400 text-white rounded py-2 px-4 mt-2">Start Quiz</button>
    </div>
  </div>
);


export default App;
