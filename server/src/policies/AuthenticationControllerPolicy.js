
const Joi = require('joi')

module.exports = {
	register(req,res,next) {
		const schema = {
			//name: Joi.string(),
			email: Joi.string().email(),
			//address: Joi.string(),
			password: Joi.string().regex(
				new RegExp('^[a-zA-Z0-9]{8,32}$')
			)
		}

		const {error, value} = Joi.validate(req.body, schema)
		if (error) {
			switch(error.details[0].context.key) {
				/*case 'name':
				res.status(400).send({
					error: 'name must be in characters'
				})
				break*/
				case 'email':
				res.status(400).send({
					error: 'you must provide an valid email address'
				})
				break
				/*case 'address':
				res.status(400).send({
					error: 'address must be in characters'
				})
				break*/
				case 'password':
				res.status(400).send({
					error: `
					password didn't match the follwoing rules <br>

					1. it can contain lower case, upper case, digit 
					<br>
					2. it must be at least 8 characters length and at maximum 32 characters lenght
					`
				})
				break
				default:
				res.status(400).send({
					error: "invalid registration information"
				})
			}
		}
		else {
			next()	
		}
	}

}