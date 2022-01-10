const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const movieSchema = new Schema({
    name: {type: String},
    description: {type: String},
    img: {type: String},
    likes: {type: Number, $gte: 0},
    dislikes: {type: Number, $gte: 0},
    numberOfReviews: {type: Number}
},{timestamps: true})

const Movie = model('Movie', movieSchema);

module.exports = Movie;
