import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Quiz from './views/Quiz';
import Home from './views/Home';

const App = () => (
  <Router>
    <div className="flex min-h-screen font-sans bg-grey-200">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
      </Switch>
    </div>
  </Router>
);


export default App;
