import React, { Component } from 'react';
import { GlobalStyle } from './style.js'
import Header from './common/header';
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login'

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Provider store={store}>
            <BrowserRouter>
              <div>
                <Header />
                <Route path='/' exact component = {Home}></Route>
                <Route path='/login' exact component = {Login}></Route>
                <Route path='/detail' exact component = {Detail}></Route>
              </div>
            </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
