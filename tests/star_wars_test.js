"use strict";

var request = require("supertest"),
    joiAssert = require("joi-assert");

const { schemaPlanet } = require("../schemas/planet_schema");
const { schemaPeople } = require("../schemas/people_schema");
const { schemaFilms } = require("../schemas/films_schema");
const { schemaStarships } = require("../schemas/starships_schema");
const { schemaVehicles } = require("../schemas/vehicles_schema");
const { schemaSpecies } = require("../schemas/species_schema");

const {
    PATH_PLANET, PATH_PEOPLE, PATH_FILMS, PATH_STARSHIPS,
    PATH_VEHICLES, PATH_SPECIES
} = require('../url/baseUrl')

const request_timeout = 10000;
const URL = process.env.NODE_ENV;

describe("Testes de contrato Star Wars", function () {

    it("Validar contrato de um planeta específico", function (done) {
        this.timeout(request_timeout);
        request(URL)
            .get(PATH_PLANET)
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res) {
                joiAssert(res.body, schemaPlanet);
                done(err);
            });
    });

    it("Validar planeta inexistente ", function (done) {
        this.timeout(request_timeout);
        request(URL)
            .get("planets/500/")
            .expect(404)
            .end(function (err) {
                done(err);
            });
    });

    it("Validar contrato de um personagem específico", function (done) {
        this.timeout(request_timeout);
        request(URL)
            .get(PATH_PEOPLE)
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res) {
                joiAssert(res.body, schemaPeople);
                done(err);
            });
    });

    it("Validar personagem inexistente", function (done) {
        this.timeout(request_timeout);
        request(URL)
            .get("people/890/")
            .expect(404)
            .end(function (err) {
                done(err);
            });
    });

    it("Validar contrato de um filme específico", function (done) {
        this.timeout(request_timeout);
        request(URL)
            .get(PATH_FILMS)
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res) {
                joiAssert(res.body, schemaFilms);
                done(err);
            });
    });


    it("Validar filme inexistente", function (done) {
        this.timeout(request_timeout);
        request(URL)
            .get('films/50/')
            .expect(404)
            .end(function (err) {
                done(err);
            });
    });

    it("Validar contrato de uma nave específica", function (done) {
        this.timeout(request_timeout);
        request(URL)
            .get(PATH_STARSHIPS)
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res) {
                joiAssert(res.body, schemaStarships);
                done(err);
            });
    });

    it("Validar nave inexistente", function (done) {
        this.timeout(request_timeout);
        request(URL)
            .get("starships/50/")
            .expect(404)
            .end(function (err) {
                done(err);
            });
    });

    it("Validar contrato de uma veiculo específico", function (done) {
        this.timeout(request_timeout);
        request(URL)
            .get(PATH_VEHICLES)
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res) {
                joiAssert(res.body, schemaVehicles);
                done(err);
            });
    });


    it("Validar veiculo inexistente", function (done) {
        this.timeout(request_timeout);
        request(URL)
            .get("vehicles/100/")
            .expect(404)
            .end(function (err) {
                done(err);
            });
    });

    it("Validar contrato de uma espécie específica", function (done) {
        this.timeout(request_timeout);
        request(URL)
            .get(PATH_SPECIES)
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res) {
                joiAssert(res.body, schemaSpecies);
                done(err);
            });
    });

    it("Validar espécie inexistente", function (done) {
        this.timeout(request_timeout);
        request(URL)
            .get("species/40/")
            .expect(404)
            .end(function (err) {
                done(err);
            });
    });
})
