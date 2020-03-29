
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


app.post('/register', (req,res) => {
	res.send({
		message: `Hello ${req.body.email} you just registered`
	})
});





port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`server started on port ${port}`)
})