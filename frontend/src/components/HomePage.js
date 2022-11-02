import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import {Home} from "./Home";
import {About} from "./About";

import {Background} from './Background';
import {NavbarHeader} from './NavbarHeader'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <NavbarHeader/>
        <Background/>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path="/about" component={<About/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}
