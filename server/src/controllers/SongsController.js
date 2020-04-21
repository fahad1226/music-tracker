const { Song }  = require('../models')

module.exports = {
	async index(req, res) {
		try {
			const songs = await Song.findAll({
				limit:10
			})
			res.send(songs)
		} catch(e) {
			res.status(500).send({
				error: 'an error has ocured trying to fetch the songs,try agin.'
			})
		}
	},

	async post(req, res) {
		try {
			const songs = await Song.create(req.body)
			res.send(songs)

		} catch(e) {
			res.status(401).send('an error has occured creating the song,try again please.')
		}
	}
}