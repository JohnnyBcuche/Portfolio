import React, { Component } from "react";
import Scrollchor from "react-scrollchor";
import Home from './Home';
import About from './About';
import MyProjects from './MyProjects';
import Contact from './Contact';
import './style/css/navigation.css';

class Navigation extends Component {
 render() {
  return (
    <div>
      <nav id="top">
        <label for="show-menu" className="show-menu"><p><i class="fas fa-bars"></i>&nbsp; Menu</p></label>
        <input type="checkbox" id="show-menu" />

        <ul className="navigation">
        <h2><p>{this.props.logoTitle}</p></h2>
          <li><Scrollchor to="one" ><p>Home</p></Scrollchor></li>
          <li><Scrollchor to="two" ><p>About</p></Scrollchor></li>
          <li><Scrollchor to="three" ><p>My Projects</p></Scrollchor></li>
          <li><Scrollchor to="four" ><p>Contact</p></Scrollchor></li>
        </ul>

      </nav>

      <div id="one"><Home title="Hi, my name is Ivan and i'm a web developer." button="About me"/></div>
      <div id="two"><About /></div>
      <div id="three"><MyProjects /></div>
      <div id="four"><Contact /></div>

    </div>
    );
  }
}

export default Navigation;