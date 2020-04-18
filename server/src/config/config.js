module.exports = {
	port: 3000,
	db: {
		database: process.env.DB_NAME || 'musictracker',
		user: process.env.DB_USER || 'musictracker' ,
		password:process.env.DB_PASS || 'musictracker',
		options: {
			dialect: process.env.DIALECT || 'sqlite',
			host: process.env.HOST || 'localhost',
			storage: './musictracker.sqlite'
		},
		operatorsAliases: false
	},

	authentication : {
		jwtSecret: process.env.JWT_SECRET || 'secret'
	}
}