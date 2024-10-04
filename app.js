const express = require('express')
const app = express();
var cors = require('cors');
app.use(cors());
//const uri = process.env.URI;
//The webiste-->Node
app.use(express.json());
var mongoose = require('mongoose');
var url = "mongodb+srv://viveksharma20348:Vivek_10sharma@cluster0.enaemef.mongodb.net/vivek_portfolio";
mongoose.connect(url);
console.log("connection good");
app.get('/api', (req, res) => {
	res.send("From the server side of signup");
})

app.use('/', require('./routes/index'));
app.listen(8000);