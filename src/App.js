import React, { Component,Fragment } from 'react';
import Header from './common/header'
import Footer from './common/footer'
import { GlobalStyle } from "./style";
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalIconfont } from "./statics/iconFont/iconfont";
import store from './store/'
import { Provider } from 'react-redux'
import Home from './pages/home/'
import Detail from './pages/detail/loadable'
import Login from './pages/login/'
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GlobalIconfont />
        <Provider store={store}>
            <BrowserRouter>
              <Fragment>
                <Header />
                <Route path="/" exact component={Home}></Route>
                <Route path="/detail/:id" exact component={Detail}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Footer />
              </Fragment>
            </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
