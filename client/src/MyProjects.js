import React, {Component} from 'react';
import Scrollchor from "react-scrollchor";
import './style/css/myProjects.css';
import './style/css/universal.css';

class MyWork extends Component{
	render(){
		return(
			<div className="myWork">
				<h3>What i Do?</h3>
				<h2>My projects</h2>
				<div className="links">
					<Projects projectTitle={projectLinks[0].title} projectIcon={projectLinks[0].icon} projectDescription={projectLinks[0].description} projectLink={projectLinks[0].link} projectLinkTitle={projectLinks[0].linkTitle} />
					<Projects projectTitle={projectLinks[1].title} projectIcon={projectLinks[1].icon} projectDescription={projectLinks[1].description} projectLink={projectLinks[1].link} projectLinkTitle={projectLinks[1].linkTitle} />
					<Projects projectTitle={projectLinks[2].title} projectIcon={projectLinks[2].icon} projectDescription={projectLinks[2].description} projectLink={projectLinks[2].link} projectLinkTitle={projectLinks[2].linkTitle} />
					<Projects projectTitle={projectLinks[3].title} projectIcon={projectLinks[3].icon} projectDescription={projectLinks[3].description} projectLink={projectLinks[3].link} projectLinkTitle={projectLinks[3].linkTitle} />
				</div>
				
				<div className="skills">
					<Icons myIcon={iconObj[0].icon} myTitle={iconObj[0].title} myDescription={iconObj[0].description} />
					<Icons myIcon={iconObj[1].icon} myTitle={iconObj[1].title} myDescription={iconObj[1].description} />
				</div>

				<Scrollchor className="fill" to="contact" >Contact me</Scrollchor>
			</div>
		);
	}
}

const projectLinks = [
	{
		title: 'Kilroy Event',
		icon: <i class="fab fa-php"></i>,
		description: 'Main project on my first work.',
		link: 'https://github.com/JohnnyBcuche/Kilroy',
		linkTitle: 'GitHub link'
	},
	{
		title: 'Internship',
		icon: <i class="fab fa-vuejs"></i>,
		description: 'Main project on my internship.',
		link: 'https://github.com/JohnnyBcuche/VueLogin',
		linkTitle: 'GitHub link'
	},
	{
		title: 'Portfolio',
		icon: <i class="fab fa-react"></i>,
		description: 'My portfolio code (this page).',
		link: 'https://github.com/JohnnyBcuche/portfolio',
		linkTitle: 'GitHub link'
	},
	{
		title: 'Health Care',
		icon: <i class="fas fa-briefcase-medical"></i>,
		description: 'One-page website for health care.',
		link: 'https://github.com/JohnnyBcuche/Health-Care',
		linkTitle: 'GitHub link'
	}
];

const iconObj = [
	{
		icon: <i class="fas fa-cogs"></i>,
		title: 'Tools & Technologies',
		description: 'Tools / technologies / freameworks that I used in some point: React JS, Bootstrap, SCSS, JQuery, Github, PhpMyAdmin, NPM'
	},
	{
		icon: <i class="fas fa-code"></i>,
		title: 'Programming Languages',
		description: 'Programming languages that I learned and have some experience worked in: JavaScript, HTML, CSS, PHP, C#, MySQL'
	}
];


class Projects extends Component {
	render() {
		return (
			<div className="projects">
				<h4>{this.props.projectTitle}</h4>
				<span>{this.props.projectIcon}</span>
				<p>{this.props.projectDescription}</p>
				<a href={this.props.projectLink} rel="noopener noreferrer" target="_blank">{this.props.projectLinkTitle}</a>
			</div>
		);
	}
}

class Icons extends Component{
	render(){
		return(
			<div className="row">
				<span>{this.props.myIcon}</span>
				<h4>{this.props.myTitle}</h4>
				<p>{this.props.myDescription}</p>
			</div>
		);
	}
}

export default MyWork;