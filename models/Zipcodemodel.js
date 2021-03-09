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

    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    approximate_latitude: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    approximate_longitude: {
      type: DataTypes.NUMBER,
      allowNull: false,
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
    pop_under_10: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pop_20_to_29: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pop_30_to_39: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pop_40_to_49: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pop_50_to_59: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    pop_60_to_69: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pop_70_to_79: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pop_80_plus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pop_70_to_79: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'zipcodetable',
  }
);

module.exports = Zipcode;
