/////////////////////////////////// Express Setup ////////////////////////////////////
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const methodOverride = require('method-override');
const Movie = require('./models/movies');



////////////////////////////////////////






//////////////////////////////  MIDDLEWARE  /////////////////////////////////////
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));



/////////////////////////////////////





//////////////////////////////  DATABASE SETUP  /////////////////////////////////////
const mongoose = require('mongoose');

// basiccrud is the name of the database that we will use/create

const mongoURI = process.env.MONGODB_URI;
const db = mongoose.connection;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true

}, ()=> {
  console.log('Database Connected');
})

db.on('error', (err)=> {console.log('Error: ', err)})
db.on('connected', ()=> {console.log('Mongo Connected')})
db.on('disconnected', ()=> {console.log('Mongo Disconnected')})


///////////////////////////////////////////////////////////////////


const moviesController = require('./controllers/movies');
app.use('/movies', moviesController)








/////////////////////////////////// APP LISTEN /////////////////////////////////

app.listen(PORT, (req,res)=> {
  console.log('Running for ya! 🏃🏽‍♂️🏃🏽‍♂️🏃🏽‍♂️');
});


////////////////////////////////////////
