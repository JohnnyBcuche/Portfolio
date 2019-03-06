import React, {Component} from 'react';
import Scrollchor from "react-scrollchor";
import './style/css/home.css';
import './style/css/universal.css';

class Home extends Component{
	render(){
		return(
			<div className="backImg">
			<div className="intraduction">
				<div className="glitch" data-text="Strobocops">
				    <span className="glitch__color glitch__color--red">{this.props.title}</span>
				    <span className="glitch__color glitch__color--blue">{this.props.title}</span>
				    <span className="glitch__color glitch__color--green">{this.props.title}</span>
				    <span className="glitch__main">{this.props.title}</span>
				    <span className="glitch__line glitch__line--first"></span>
				    <span className="glitch__line glitch__line--second"></span>
				</div>
			</div>
				<div class="center">
					<h3 class="marquee"><span>I design and code beautifully simple things, and I love what I do.</span></h3>
				</div>
				<Scrollchor className="raise" to="about" >{this.props.button}</Scrollchor>
			</div>
		);
	}
}

export default Home;