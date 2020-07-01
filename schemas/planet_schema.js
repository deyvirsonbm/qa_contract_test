"use strict";

const Joi = require("joi");

const schemaPlanet = Joi.object({
    account_active: Joi.boolean().required(),
    type: Joi.string().required(),
    year_creation: Joi.number().required().options({
      convert: false
    }),
});


module.exports = {
    schemaLogin,
  };