/////////////////////////////////// Express Setup ////////////////////////////////////
const express = require('express');
const app = express();
const PORT = 3000;
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

const mongoURI = 'mongodb://127.0.0.1:27017/movies';
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

app.listen(3000, (req,res)=> {
  console.log('Running for ya! 🏃🏽‍♂️🏃🏽‍♂️🏃🏽‍♂️');
});


////////////////////////////////////////
