const user = require('../models/user');

const sendUser = async (req, res) => {
	try {

        const { name } = req.body;
        console.log(name);

        const response = await user.create({ name });


        res.status(200).json({
			sucess: true,
			message: 'Data submitted ',
			data: response,
		});

	} catch (error) {
		res.status(404).json({
			success: false,
			message: 'Data send nahi hua',
		});
		console.log(error);
	}
};

module.exports = sendUser;
