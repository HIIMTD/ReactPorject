import React, { Component } from 'react';
import { GlobalStyle } from './style.js'
import Header from './common/header';
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Provider store={store}>
          <div>
            <Header />
            <BrowserRouter>
              <div>
                <Route path='/' exact render={() => <div>home</div>}></Route>
                <Route path='/detail' exact render={() => <div>detail</div>}></Route>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
