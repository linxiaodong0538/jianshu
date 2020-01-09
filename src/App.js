import React from 'react';
import { GlobalStyle } from './style.js';
import Header from './common/header/index'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../src/pages/home'
import Detail from '../src/pages/detail'
import Login from '../src/pages/login'
import Write from '../src/pages/write'



class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        < Provider store={store}>
       
 
            <BrowserRouter>
              <div>
              <Header />
                <Route path='/' exact component={Home}/> 
                <Route path='/detail/:id' exact component={Detail}/> 
                <Route path='/login' exact component={Login}/> 
                <Route path='/write' exact component={Write}/> 

              </div>
            </BrowserRouter>
     
        </Provider>
      </React.Fragment>
    )
  }
}

  export default App;
