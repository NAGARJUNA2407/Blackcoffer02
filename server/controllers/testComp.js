console.log('this is test comp');

exports.testComp = async (req,res)=>

{
	try {






		
		res.status(200).json({ success: true, message: 'sab sahi hain' });
	} catch (error) {
		res.status(404).json({
			success: false,
			message: 'error hain ',
		});

		console.log('error aaya hain');
	}
}

