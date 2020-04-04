
const {User} = require('../models')


module.exports = {
	async register(req,res) {
		try {
			const user = await User.create(req.body)
			res.send({
				message: 'user created successfully',
				user: user.toJSON()
			})
		} catch(err) {
			res.status(400).send({
				error: 'email is already in use'
			})
		}
	}
}


/*module.exports = {
	register(req,res) {
		try {

			res.send({
				name: 'Fahad',
				age: 21
			})
		} catch(e) {

			console.log('oh,somethig went wronmg');
		}
	}
}*/