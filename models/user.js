const mongoose = require('mongoose');
const validator = require('validator');
const { compare } = require('bcrypt');
const UnauthorizedError = require('../errors/unauthorized-error');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, 'Должно быть, не меньше 2 символа'],
    maxlength: [30, 'Должно быть, не больше 30 символов'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Поле "email" должно быть заполнено'],
    validate: {
      validator: (v) => validator.isEmail(v),
      message: 'Неправильный формат почты',
    },
  },
  password: {
    type: String,
    required: [true, 'Поле "password" должно быть заполнено'],
    select: false,
  },
}, {
  toObject: {
    useProjection: true,
    versionKey: false,
  },
});

userSchema.method.toJSON = () => {
  const user = this.toObject();
  delete user.password;
  return user;
};

userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError('Такой пользователь не найден');
      }
      return compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnauthorizedError('Неправильный пароль');
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
