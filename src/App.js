import React from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/Shop/shop.component.jsx';
import Header from './components/Header/header.component.jsx';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>      
      </Switch>
    </div>
  );
}

export default App;
