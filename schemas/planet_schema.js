"use strict";

const Joi = require("joi");

const schemaPlanet = Joi.object({
  name: Joi.string().required(),
  rotation_period: Joi.string().required(),
  orbital_period: Joi.string().required(),
  diameter: Joi.string().required(),
  climate: Joi.string().required(),
  gravity: Joi.string().required(),
  terrain: Joi.string().required(),
  surface_water: Joi.string().required(),
  population: Joi.string().required(),
  residents: Joi.string().required(),
  residents: Joi.array(),
  films: Joi.array(),
  created: Joi.string().required(),
  edited: Joi.string().required(),
  url: Joi.string().required()
})

module.exports = {
  schemaPlanet,
};