
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')
//initialize our express application
const app = express()


//middleware
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

require('./router/routes.js')(app)

sequelize.sync({force:false})
	.then( () => {
		app.listen(process.env.PORT || 3000)
		console.log(`server started on port ${config.port}`);
	})


// {force:true} to delete all data from database