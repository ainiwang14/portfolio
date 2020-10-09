import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './Common/Header';
import Footer from './Common/Footer';
import NotFound from './NotFound/NotFound';
import Contact from './Contact/Contact';

const routing = (
  <Router>
    <div>
      <Header />
      <hr/>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/projects' component={App} />
        <Route path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
