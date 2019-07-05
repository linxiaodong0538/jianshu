import React from 'react';
import { GlobalStyle } from './style.js';
import Header from './common/header/index'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      < Provider store={store}>
        <Header />
      </Provider>
    </React.Fragment>

  );
}

export default App;
