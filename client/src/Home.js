import React, {Component} from 'react';
import Scrollchor from "react-scrollchor";
import './style/css/home.css';
import './style/css/universal.css';

class Home extends Component{
	render(){
		return(
			<div className="backImg">
				<h1>{this.props.title}</h1>
				<div class="center">
					<h3 class="marquee"><span>I design and code beautifully simple things, and I love what I do.</span></h3>
				</div>
				<Scrollchor className="raise" to="two" >{this.props.button}</Scrollchor>
			</div>
		);
	}
}

export default Home;