// import mongoose module
let mongoose = require('mongoose');

// set connection
let connectionURL = 'mongodb+srv://dbAdmin:admin@cluster0.75dhy.mongodb.net/Test';

//Get the default connection
async function connectSequence() {
	let conn = await mongoose.createConnection(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true, dbName: "Test"});

	//Bind connection to error event (to get notification of connection errors)
	conn.on('error', console.error.bind(console, 'MongoDB connection error:'));
	conn.once('open', () => {
	    console.log('connected to Mongo')
	    conn.db.listCollections().toArray(function (err, collectionNames) {
	    	console.log(collectionNames);
	    })
        console.log(collectionNames);
	})
}


connectSequence()

// Define schemas
const snackSchema = new mongoose.Schema({
	name: {type: String, required: true, unique: true},
	price: {type: Number, required: true}},
	{collection: "Snacks"}
)

const Snack = mongoose.model('Snacks', snackSchema)

module.exports = {Snack}