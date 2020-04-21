const { Song}  = require('../models')

module.exports = {
	async index(req, res) {
		try {
			const songs = await Song.findAll({
				limit:10
			})
			res.send(sonsg)
		} catch(e) {
			res.status(404).send('not found')
		}
	},

	async post(req, res) {
		try {
			const songs = await Song.create(req.body)
			res.send(songs)

		} catch(e) {
			res.status(401).send('an error has occured fetching the songs,try again please.')
		}
	}
}