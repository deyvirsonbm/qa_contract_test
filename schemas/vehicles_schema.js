"use strict";

const Joi = require("joi");

const schemaVehicles = Joi.object({
  name: Joi.string().required(),
  model: Joi.string().required(),
  manufacturer: Joi.string().required(),
  cost_in_credits: Joi.string().required(),
  length: Joi.string().required(),
  max_atmosphering_speed: Joi.string().required(),
  crew: Joi.string().required(),
  passengers: Joi.string().required(),
  cargo_capacity: Joi.string().required(),
  consumables: Joi.string().required(),
  vehicle_class: Joi.string().required(),
  pilots: Joi.array(),
  films: Joi.array(),
  created: Joi.string().required(),
  edited: Joi.string().required(),
  url: Joi.string().required()
})

module.exports = {
    schemaVehicles,
};