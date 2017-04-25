import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './components/App';
import Home from './components/Home';
import About from './components/About';


ReactDOM.render(
    <Router>
        <div>
              <App />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </div>
    </Router>,
    document.getElementById('app')
);
