import React, {Component} from 'react';
import Scrollchor from "react-scrollchor";
import axios from 'axios';
import './style/css/contact.css';
import './style/css/universal.css';

class Contact extends Component{
	constructor(){
		super()

		this.state = {
			name: "",
			email: "",
			message: ""
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault()

		const{ name, email, message } = this.state

		const form = axios.post('/api/form', {
			name,
			email,
			message
		})

		this.name.value = '';
		this.email.value = '';
		this.textarea.value = '';
	}

	render(){
		return(
			<div className="contact-page">
				<h1>Contact me here!</h1>

			<div className="container">
				<form onSubmit={this.handleSubmit} >
			        <label for="name">Name:</label>
	        		<input
		            type="text"
		            name="name"
		            ref={(name) => this.name = name}
		            onChange={this.handleChange} required />
	        	
	        		<label for="email">Email:</label>
	        		<input
		            type="email"
		            name="email"
		            ref={(email) => this.email = email}
		            onChange={this.handleChange} required />
	        	 
	        		<label for="message">Message:</label>
	        		<textarea
		            type="textarea"
		            name="message"
		            ref={(textarea) => this.textarea = textarea}
		            onChange={this.handleChange} required >
		            </textarea>
			        	 
			        <button>Submit</button>
			    </form>
			</div>

			<h1><Scrollchor className="goToTop" to="top" ><i class="fas fa-arrow-alt-circle-up"></i></Scrollchor></h1>

			<Footer />
			
			</div>
		);
	}
}

class Footer extends Component {
	render() {
		return (
				<footer>
					<div className="footer">
						<a href="https://github.com/JohnnyBcuche" rel="noopener noreferrer" target="_blank"><i class="fab fa-github"></i></a>
						<a href="https://www.linkedin.com/in/ivan-ki%C5%A1-187647145/" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin"></i></a>
						<a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ivankis92@gmail.com" rel="noopener noreferrer" target="_blank"><i class="fas fa-envelope"></i></a>
					</div>
					
					<small>&copy; Copyright 2019, Ivan Kiš</small>
				</footer>
		);
	}
}

export default Contact;