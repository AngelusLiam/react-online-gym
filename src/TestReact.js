import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from './components/home/home';
import dipendenti from './components/dipendenti/dipendenti'
import MainTemplate from './components/mainLayout/template/mainTemplate';
import Login from './components/login/login';
import Gym from './components/gym/gym';

export default class TestReact extends Component {
    render(){
      return(
        <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path = "/" component = {home}/>
            <Route exact path = '/cards' component = {dipendenti}/>
            <Route exact path = '/login' component = {Login}/>
            <Route exact path = '/gym' component = {Gym}/>
          </Switch>
        </MainTemplate>
        </BrowserRouter>
      );
    }
}

