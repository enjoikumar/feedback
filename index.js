const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();
//creates new instance of google passport(login)
passport.use(
	new GoogleStrategy(
	{       
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback'
	}, 
		(accessToken, refreshToken, profile, done) => {
			console.log('access token', accessToken);
			console.log('refresh token', refreshToken);
			console.log('profile:', profile);
		}
	)
);

app.get(
	'/auth/google', 
	passport.authenticate('google', {
		scope: ['profile', 'email']
	})
);

app.get('/auth/google/callback', 
	passport.authenticate('google')
);

const PORT = process.env.PORT || 3000;
console.log("ʕノ•ᴥ•ʔノ ︵ ┻━┻")
app.listen(3000);

