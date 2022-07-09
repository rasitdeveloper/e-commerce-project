const JWT = require("jsonwebtoken");
const Boom = require("boom");

const redis = require("../clients/redis");

const signAccessToken = (data) => {
	return new Promise((resolve, reject) => {
		const payload = {
			...data,
		};

		const options = {
			expiresIn: "7d",
			issuer: "ecommerce.app",
		};

		const jwtSecret = "deneme";

		JWT.sign(payload, jwtSecret, options, (err, token) => {
			if (err) {
				console.log(err);
				reject(Boom.internal());
			}

			resolve(token);
		});
	});
};


const signRefreshToken = (user_id) => {
	return new Promise((resolve, reject) => {
		const payload = {
			user_id,
		};
		const options = {
			expiresIn: "90d",
			issuer: "ecommerce.app",
		};

		const jwtRefreshSecret = "yenideneme"

		JWT.sign(payload, jwtRefreshSecret, options, (err, token) => {
			if (err) {
				console.log(err);
				reject(Boom.internal());
			}

			redis.set(user_id, token, "EX", 90 * 24 * 60 * 60);

			resolve(token);
		});
	});
};


module.exports = {
	signAccessToken,
	signRefreshToken,
};
