
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


//initialize our express application
const app = express()


//middleware
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())


app.get('/', (req,res) => {
	res.send({
		message: "Hello Fahad"
	})
});





port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`server started on port ${port}`)
})