import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { BASEURI, STORAGE_KEY_JWT } from './lib/consts';
import * as Routes from './routes';

class App extends Component {

  constructor() {
    super();

    this.state = {
      loading: true,
      token: null,
      user: null,
    };

    // warn non-devs about the danger of the console
    if (process.env.NODE_ENV !== 'development')
      console.log(
        '%cWARNING: This is a developer console! If you were told to open this and copy/paste something, and you are not a javascript developer, it is a scam and entering info here could give them access to your account!',
        'background: red; color: yellow; font-size: 45px'
      );
  }

  componentDidMount = async () => {
    let token;

    if (window.location.href.match(/\/jwt\//)) {
      token = window.location.href.split('/').pop();
      if (token) await this.setToken(token);
      setTimeout(() => {window.location.href = BASEURI+'/#/'}, 500);
      setTimeout(() => {window.location.reload()}, 1500);
      return;
    }

    token = await localStorage.getItem(STORAGE_KEY_JWT);
    if (token) await this.setToken(token);

    this.setState({loading: false});
  }

  logout = async () => {
    await localStorage.removeItem(STORAGE_KEY_JWT);
    this.setState({user: null, token: null});
  }

  setToken = async (token) => {
    try {
      let user = jwt_decode(token);
      await localStorage.setItem(STORAGE_KEY_JWT, token);
      this.setState({token, user});
    } catch (e) {
      this.setState({token: null, user: null});
      await localStorage.removeItem(STORAGE_KEY_JWT);
    }
  }

  render() {
    const { loading, user} = this.state;

    if (loading) return (<div>Loading!!</div>);
    if (!user) return (<Router><Route path="/" render={() => <Routes.Login refer={this} />} /></Router>);

    //return (<div>LOADED!!!!!!</div>);

    return (
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <Routes.Home refer={this} />
          </Route>
          <Route path="/place1">
            <Routes.Place1 refer={this} />
          </Route>
          <Route path="/place2">
            <Routes.Place2 refer={this} />
          </Route>
          <Route path="/place3">
            <Routes.Place3 refer={this} />
          </Route>
          <Route component={Routes.NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
