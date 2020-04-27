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
	},

	async show(req, res) {
		try {
			const song = await Song.findByPk(req.params.songId)
			res.send(song)

		} catch(e) {
			res.status(401).send('an error has occured creating the song,try again please.'+e)
		}
	},

	async put(req,res) {
		try {
			const song = await Song.update(req.body, {
				where: {
					id: req.params.songId
				}
			})
			res.send(req.body)
		} catch(e) {
			res.status(500).send({
				error: 'something went wrong while updating song,try again.'+e
			})
		}
	}

}