import React from 'react';import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import routes from './routes';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            SW App here.
          </p>
          <ul>
            {
              routes.map(({name, path}) => (
                <li key={name}>
                  <Link to={path}>{name}</Link>
                </li>
              ))
            }
          </ul>
        </header>
        <div className="main-container">
          <Switch>
            { routes.map((route) => (
              <Route 
                exact
                key={route.path}
                {...route}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
