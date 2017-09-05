'use strict';

/*module.exports = {
	'githubAuth': {
		'clientID': process.env.GITHUB_KEY,
		'clientSecret': process.env.GITHUB_SECRET,
		'callbackURL': process.env.APP_URL + 'auth/github/callback'
	}
};*/

module.exports = {
	'facebookAuth': {
		'clientID': process.env.FACEBOOK_ID,
		'clientSecret': process.env.FACEBOOK_SECRET,
		'callbackURL': process.env.APP_URL + 'auth/facebook/callback'
	}
};
