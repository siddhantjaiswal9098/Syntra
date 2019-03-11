import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert, UncontrolledAlert, Badge, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import Header from './components/header/headerComponent';
import Body from './components/body/bodyComponent'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
