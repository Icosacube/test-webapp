/*
* The primary javascript file.
*/

// setup Express
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = process.env.PORT || 8080
var path = require('path')
app.use(express.json())  // replaces body-parser

// include Mongoose stuff
// const TABLE_NAME = require('./db.js')

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: 'hbs'
}))

app.use(express.static('public'))
app.set('view engine', 'hbs')

var {Snack} = require('./db.js')

/*==========================ROUTING STARTS HERE==========================*/

// get menu of snacks including pictures and prices
app.get('/', async (req, res) => {
	res.render('index')
})

app.get('/alt', async (req, res) => {
	res.render('alt')
})

app.get('/lee', function(req, res)
{
res.render('town', { town: "Lee Vining"});
});

var gungun = {
	guns: [
	{"name": "USHABTI OMNIGUN", "type": "ERROR", "damage": "1 ??? Damage"},
	{"name": "Mimic Gun", "type": "Ha ha ha.", "damage": ":) Damage"},
	{"name": "Hand Cannon", "type": "Auxillary CQB", "damage": "1d6 Damage"}
	]
}

app.get('/gun', function(req, res) {
	res.render('gun', gungun);
});

app.get('/menu', async (req, res) => {
	snacks = await Snack.find()
	//console.log("Retrieved", snacks)
	res.send(snacks)
})

// start the server listening
app.listen(port, () => {
    console.log(`server is listening on port`, port)
})
