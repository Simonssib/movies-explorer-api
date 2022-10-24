const router = require('express').Router();
const userRoutes = require('./users');
const movieRoutes = require('./movies');
const { login, createUser, signOut } = require('../controllers/users');
const { validateLogin, validateCreateUser } = require('../middlewares/validator');

const auth = require('../middlewares/auth');

router.post('/signin', validateLogin, login);
router.post('/signup', validateCreateUser, createUser);
router.post('/signout', auth, signOut);

router.use('/users', auth, userRoutes);
router.use('/movies', auth, movieRoutes);

module.exports = router;
