const { DataTypes } = require('sequelize');
const jwt = require('jsonwebtoken')
const db = require('../config/db');
const {jwtPrivateKey} = require('../config/env')

const User = db.define('user', {
  id: {
    type: DataTypes.BIGINT(11),
    autoIncrement: true,
    primaryKey: true,
  },

  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.prototype.generateAuthToken = () => {
  const token = jwt.sign(
    { id: this.id, name: this.name, email: this.email },
    jwtPrivateKey
  );
  return token;
};

module.exports = User;
