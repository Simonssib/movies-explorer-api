const express = require('express');

const movieRoutes = express.Router();

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');
const { validateCreateMovie, validateMovieId } = require('../middlewares/validator');

movieRoutes.get('/', getMovies);
movieRoutes.patch('/', validateCreateMovie, createMovie);
movieRoutes.patch('/_id', validateMovieId, deleteMovie);

module.exports = movieRoutes;
