import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation';
import * as serviceWorker from './serviceWorker';

class App extends Component{
	render(){
		return(
			<div>
				<Navigation logoTitle="Ivan Kiš" />	
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
