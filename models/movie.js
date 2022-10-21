const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Simon',
    required: true,
  },
  director: {
    type: String,
    default: 'Simon',
    required: true,
  },
  duration: {
    type: Number,
    default: '0',
    required: true,
  },
  year: {
    type: String,
    default: '2000',
    required: true,
  },
  country: {
    type: String,
    default: 'Russia',
    required: true,
  },
  description: {
    type: String,
    default: 'Simon',
    required: true,
  },
  image: {
    type: String,
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
  },
  trailerLink: {
    type: String,
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
  },
  thumbnail: {
    type: String,
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'movie',
    required: true,
  },
  nameRU: {
    type: String,
    default: 'фильм',
    required: true,
  },
  nameEN: {
    type: String,
    default: 'film',
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
