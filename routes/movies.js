const express = require('express');

const movieRoutes = express.Router();

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

movieRoutes.get('/', getMovies);
movieRoutes.patch('/', createMovie);
movieRoutes.patch('/_id', deleteMovie);

module.exports = movieRoutes;
