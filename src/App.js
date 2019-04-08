import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {getAllProducts} from './pipes/getallproducts';
import {receiveProducts} from './actions/index';

import rootReducer from './reducers';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import './App.scss';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart";
import LoginRegister from "./authentication/authentication";
import FormsPage, {OrderSuccess} from "./checkout/checkout";


const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
export const  store = createStore(rootReducer, applyMiddleware(...middleware));
store.dispatch(getAllProducts())


class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route exact path={'/'} render={() => {
                        return <Redirect to={'/products'}/>
                    }}/>
                    <Route exact path={'/authenticate'} component={LoginRegister} />
                    <Route exact path={'/products/:id'} component={ProductDetail}/>
                    <Route exact path={'/checkout'} component={FormsPage}/>
                    <Route exact path={'/checkout/ordersuccess'} component={OrderSuccess}/>
                    <Route exact path={'/cart'} component={ShoppingCart}/>
                    <Route exact patr={'/products'} component={Home}/>
                </Switch>
                <Footer/>
            </React.Fragment>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
