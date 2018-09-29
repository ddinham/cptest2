'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Product = db.define('products', {
  Name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  Age: {
  	type: Sequelize.INTEGER,
  	allowNull: false
  },
  Email: {
  	type: Sequelize.TEXT,
  	allowNull: false
  },
  Phone: {
  	type: Sequelize.INTEGER,
  	allowNull: false
  },
  Driving: {
  	type: Sequelize.TEXT,
  	allowNull: false
  },
  Insurance: {
  	type: Sequelize.TEXT,
  	allowNull: false
  },
  DOB: {
  	type: Sequelize.INTEGER,
  	allowNull: false
  },
  Password: {
  	type: Sequelize.TEXT,
  	allowNull: false
  }


});

module.exports = Product;
