const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Zipcode = db.define(
  'zipcodetable',
  {
    zip: {
      type: DataTypes.BIGINT(11),
      primaryKey: true,
      allowNull: false,
    },

    approximate_latitude: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    approximate_longitude: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    population_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_male_population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_female_population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    median_household_income: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: 'zipcodetable',
  }
);

module.exports = Zipcode;
