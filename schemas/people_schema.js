"use strict";

const Joi = require("joi");

const schemaPeople = Joi.object({
    name: Joi.string().required(),
    height: Joi.string().required(),
    mass: Joi.string().required(),
    hair_color: Joi.string().required(),
    skin_color: Joi.string().required(),
    eye_color: Joi.string().required(),
    birth_year: Joi.string().required(),
    gender: Joi.string().required(),
    homeworld: Joi.string().required(),
    films: Joi.array(),
    species: Joi.array(),
    vehicles: Joi.array(),
    starships: Joi.array(),
    created: Joi.string().required(),
    edited: Joi.string().required(),
    url: Joi.string().required()
})

module.exports = {
    schemaPeople,
};