import React from 'react';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react/cjs/react.production.min';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';
import Main from './components/MainComponent';


class App extends Component {
  
  render() {
    return (
      <div className='App'>
        <Main />       
      </div>
    )
  }
}

export default App;
