module.exports = (sequelize, DataTypes) => 
sequelize.define('Song', {

	title: DataTypes.STRING,
	artist: DataTypes.STRING,
	genre: DataTypes.STRING,
	album: DataTypes.STRING,
	albumImageUrl: DataTypes.STRING,
	youtubeId: DataTypes.STRING,
	lyrics: DataTypes.TEXT,
	tab: DataTypes.TEXT
})





/*"title": "summer of 69",
"artist": "Brayan Adams",
"genre": "Rock",
"album": "Young",
"albumImageUrl": "www.google.com/summer of 69",
"youtubeId": "www.youtube.com/summer of 69",
"lyrics": "www.google.com/summer of 69 lyrics" ,
"tab": */