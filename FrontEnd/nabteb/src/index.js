import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route ,Switch } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import News from './components/News'
import About from './components/About'
import Contact from './components/Contact'
import Centers from './components/Centers'
import Examinations from './components/Examinations'
import Offers from './components/Offers'
import Register from './components/Register'
import Reset from './components/Reset'
import Login from './components/Login'
import AccountConfirmation from './components/Account-confirmation'

ReactDOM.render(<BrowserRouter >
  <div>
    <Switch>
      <Route exact path={"/dashboard"} component={Dashboard} />
    <Header >
    <Route exact path={"/"} component={App} />
    <Route exact path={"/news"} component={News} />
    <Route exact path={"/about"} component={About} />
    <Route exact path={"/contact"} component={Contact} />
    <Route exact path={"/examinations"} component={Examinations} />
    <Route exact path={"/offers"} component={Offers} />
    <Route exact path={"/centers"} component={Centers} />
    <Route exact path={"/register"} component={Register} />
    <Route exact path={"/reset"} component={Reset} />
    <Route exact path={"/login"} component={Login} />
    <Route exact path={"/account/confirm"} component={AccountConfirmation} />
  </Header>

    </Switch>
  </div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
