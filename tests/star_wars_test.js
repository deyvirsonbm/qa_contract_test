"use strict";

var request = require("supertest"),
    expect = require("chai").expect,
    joiAssert = require("joi-assert");

const {
    schemaPlanet,  
} = require("../schemas/planet_schema.js");

const { PATH_PLANET} = require('../url/baseUrl')
const request_timeout = 10000;
const URL = process.env.NODE_ENV;

describe("Testes de contrato Star Wars", function() { 
    
    it("Validar contrato de um planeta",function(done) {
    this.timeout(request_timeout);
    request(URL)
    .get(PATH_PLANET)
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function(err, res) {
        joiAssert(res.body, schemaPlanet);
        done(err);
        });
    });
})
