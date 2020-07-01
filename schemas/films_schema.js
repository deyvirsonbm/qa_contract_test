"use strict";

const Joi = require("joi");

const schemaFilms = Joi.object({
    title: Joi.string().required(),
    episode_id: Joi.number().required(),
    opening_crawl: Joi.string().required(),
    director: Joi.string().required(),
    producer: Joi.string().required(),
    release_date: Joi.string().required(),
    characters: Joi.array().required(),
    planets: Joi.array(),
    starships: Joi.array(),
    vehicles: Joi.array(),
    species: Joi.array(),
    created: Joi.string().required(),
    edited: Joi.string().required(),
    url: Joi.string().required()
})

module.exports = {
    schemaFilms,
};