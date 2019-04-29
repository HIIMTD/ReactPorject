import React, { Component } from 'react';
import { GlobalStyle } from './style.js'
import Header from './common/header';
import store from './store/index';
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    return (
      <fragment>
        <GlobalStyle />
        <Provider store = {store}>
          <Header />
        </Provider>
      </fragment>
    );
  }
}

export default App;
