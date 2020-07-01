"use strict";

const Joi = require("joi");

const schemaSpecies = Joi.object({
  name: Joi.string().required(),
  classification: Joi.string().required(),
  designation: Joi.string().required(),
  average_height: Joi.string().required(),
  skin_colors: Joi.string().required(),
  hair_colors: Joi.string().required(),
  eye_colors: Joi.string().required(),
  average_lifespan: Joi.string().required(),
  homeworld: Joi.string().required().allow(null),
  language: Joi.string().required(),
  people: Joi.array(),
  films: Joi.array(),
  created: Joi.string().required(),
  edited: Joi.string().required(),
  url: Joi.string().required()
})

module.exports = {
    schemaSpecies,
};