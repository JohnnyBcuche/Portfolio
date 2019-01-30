const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/form', (req, res) => {
	nodemailer.createTestAccount((err, account) => {
		const htmlEmail = `
			<h3>Contact Details</h3>
			<ul>
				<li>Name: ${req.body.name}</li>
				<li>Email: ${req.body.email}</li>
			</ul>
			<h3>Message:</h3>
			<p>${req.body.message}</p>
		`
		
	let transporter = nodemailer.createTransport({
	service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
    	type: 'OAuth2',
        user: 'serverConfig.gmail.client_user',
        clientId: 'serverConfig.gmail.client_clientId',
     	clientSecret: 'serverConfig.gmail.client_clientSecret',
     	refreshToken: 'serverConfig.gmail.client_refreshToken'
    }
	});

	let mailOptions = {
    to: 'serverConfig.gmail.client_user',
    replayTo: 'New Message',
    subject: "Hello ✔",
    text: req.body.message,
    html: htmlEmail
	};

	transporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			return console.log(err)
		}
			console.log("Message sent: %s", info.messageId);
			console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
		})
	})
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	const path = require('path');
	app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}