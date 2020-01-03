import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import ContactPage from './pages/contactpage/contactPage.component';
import GamesPage from './pages/gamespage/gamespage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component.jsx';

function App() {
  return (
    <div>

      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/games' component={GamesPage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
