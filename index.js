const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(new GoogleStrategy({ //creates new instance of google passport(login)
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret
	})
); 

const PORT = process.env.PORT || 3000;
app.listen(3000);

