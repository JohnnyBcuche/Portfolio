import React, {Component} from 'react';
import Scrollchor from "react-scrollchor";
import './style/css/about.css';
import './style/css/universal.css';

class About extends Component{
	render(){
		return(
			<div className="about">
				<div className="aboutMe">
					<h1>Hi, I’m Ivan. Nice to meet you!</h1>
					<p>
						Beginning my journey as a web developer while I was still student on college at University of Novi Sad, I get 
						experience working on some projects (you can look on my github profile), mostly on front-end using some basic 
						stuff and JavaScript frameworks. My work is something I do with lot of honesty, passion and commitment. Now I'm 
						freshly gratuated Bachelor of Engineering (Information Technology) who is searching for some new challenges and 
						would be appreciate to get one. Always like to learn new things, I'm quietly confident, naturally curious, and 
						perpetually improving my chops. Feel free to check out my <a href="https://github.com/JohnnyBcuche" rel="noopener noreferrer" target="_blank">GitHub</a> and <a href="https://www.linkedin.com/in/ivan-ki%C5%A1-187647145/" rel="noopener noreferrer" target="_blank">LinkedIn</a> profiles to see more about me and my work.
					</p>
				</div>
				<Scrollchor className="pulse" to="three">Go to my projects</Scrollchor>
			</div>
			
		);
	}
}

export default About;