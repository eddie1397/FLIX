const express = require('express');
const router = express.Router();

const Movie = require('../models/movies');

/////////////////////////////////// ROUTER GET ////////////////////////////////////
//HOME ROUTE
router.get('/home', (req,res)=>{
  console.log('You hit the Homepage');
  res.render('home.ejs');

})

//REVIEW ROUTE
router.get('/review', (req,res)=>{
  console.log('You hit the Review Page');
  res.render('review.ejs');

})

//WATCH ROUTE
router.get('/watch', (req,res)=>{
  console.log('You hit the Watch Page');
  res.render('watch.ejs');

})


//INDEX ROUTE
router.get('/', (req,res)=> {
  console.log('You hit the Index Page');
  Movie.find({},(error,foundMovie)=>{
      res.render('index.ejs', {movies: foundMovie});
    })
});


//NEW ROUTE
//Add New FORM
router.get('/new', (req,res)=>{
  console.log('You hit the New Page');
  res.render('new.ejs')
})

//POST
router.post('/', (req,res)=> {
  console.log(req.body);
  Movie.create(req.body, (error,createdMovie)=> {
    if (error) {
      console.log(error.message);
    } else {
      console.log(createdMovie);
      res.redirect('/movies');
    }
  })
})


//EDIT ROUTE
router.get('/:id/edit', (req,res)=>{
  Movie.findById(req.params.id, (error,foundMovie)=>{
    console.log(req.body);
    if (error) {
      console.log(error);
      res.send(error)
    } else {
      res.render('edit.ejs', {movie: foundMovie})
    }
  })
})

//UPDATE ROUTE
router.put('/:id', (req,res)=>{
  console.log(req.body);

  Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true},
      (error, updatedMovie)=>{
        if (error) {
          console.log(error);
        } else {
          console.log(updatedMovie);
          res.redirect('/movies')
        }
    })

})


//DELETE ROUTE
router.delete('/:id', (req,res)=>{
  Movie.findByIdAndDelete(req.params.id, (error,deletedMovie)=>{
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log(deletedMovie);
      res.redirect('/movies');

    }
  })
})


//SHOW ROUTE
router.get('/:id', (req,res)=>{
  console.log('You hit the Show Page');
  Movie.findById(req.params.id, (error,foundMovies)=> {
  res.render('show.ejs', {movies: foundMovies});
  })
})


////////////////////////////////////////

module.exports = router;
