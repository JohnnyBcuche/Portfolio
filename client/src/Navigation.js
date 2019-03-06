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
          <li><Scrollchor to="home" ><p>Home</p></Scrollchor></li>
          <li><Scrollchor to="about" ><p>About</p></Scrollchor></li>
          <li><Scrollchor to="my_projects" ><p>My Projects</p></Scrollchor></li>
          <li><Scrollchor to="contact" ><p>Contact</p></Scrollchor></li>
        </ul>

      </nav>

      <div id="home"><Home title="Hi, my name is Ivan and i'm a web developer." button="About me"/></div>
      <div id="about"><About /></div>
      <div id="my_projects"><MyProjects /></div>
      <div id="contact"><Contact /></div>

    </div>
    );
  }
}

export default Navigation;