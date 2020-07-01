"use strict";

var request = require("supertest"),
    expect = require("chai").expect,
    joiAssert = require("joi-assert");

const { schemaPlanet } = require("../schemas/planet_schema");
const { schemaPeople } = require("../schemas/people_schema");
const { schemaFilms } = require("../schemas/films_schema");

const { 
    PATH_PLANET, PATH_PEOPLE, PATH_FILMS
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
})
