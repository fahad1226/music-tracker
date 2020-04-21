const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user) {
	const ONE_WEEK = 60 * 60 * 24 * 7
	return jwt.sign(user, config.authentication.jwtSecret, { expiresIn: ONE_WEEK })
}

module.exports = {
	async register(req,res) {
		try {
			const user = await User.create(req.body)
			const userJSON = user.toJSON()
			res.status(200).send({
				message: 'user created successfully',
				user: userJSON,
				token: jwtSignUser(userJSON)
			})
		} catch(err) {
			res.status(400).send({
				error: 'something went wron,try again please' + err
			})
		}
	},

	async login(req,res) {
		try {
			const { email, password } = req.body 
			const user = await User.findOne({ where : { email:email } })
			if (!user) {
				return res.status(404).send({
					error: "there's no user!"
				})
			}

			const isPasswordValid = password === user.password

			if (! isPasswordValid) {
				return res.status(403).send('password didnt match!')
			}

			const userJSON = user.toJSON()

			res.status(200).send({
				user: userJSON,
				token: jwtSignUser(userJSON)
			})

		} catch(e) {
			res.status(500).send('an error occured whihle trying to login!' + e)
		}
	},

	async getUsers(req,res) {
		try {
			const users = User.find({})
			res.status(200).send(users)
		} catch(e) {
			res.send(e)
		}
	}
}
