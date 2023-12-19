const mongoose = require('mongoose');
const user = require('../models/user');

const getUser = async (req, res) => {
    try {
		res.status(200).json({
			success: true,
			message: 'Users found',
			data: data,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Internal error',
		});
	}
};

module.exports = getUser;
