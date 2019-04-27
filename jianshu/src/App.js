import React, { Component } from 'react';
import { GlobalStyle } from './style.js'
import Header from './common/header';

class App extends Component {
  render() {
    return (
      <fragment>
        <GlobalStyle />
        <Header />

      </fragment>
    );
  }
}

export default App;
