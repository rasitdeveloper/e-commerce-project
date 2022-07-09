const User = require('../models/User');

// helpers
const { signAccessToken, signRefreshToken } = require("../helpers/jwt");

exports.register = async (req, res, next) => {
    const input = req.body;
    try {
        const isExists = await User.findOne({ email: input.email });

		if (isExists) {
			return next(Boom.conflict("This e-mail already using."));
		}

        const user = await User.create(input);
        const userData = user.toObject();

        delete userData.password;
		delete userData.__v;

        const accessToken = await signAccessToken({
			user_id: user._id,
			role: user.role,
		});
		const refreshToken = await signRefreshToken(user._id);

        res.status(201).json({
            user: userData,
			accessToken,
			refreshToken,
        });
    } catch (error) {
        next(error);
        res.status(400).json({
            status: 'fail',
            error,
        })
    }
}
