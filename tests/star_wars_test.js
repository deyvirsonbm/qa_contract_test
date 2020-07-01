"use strict";

var request = require("supertest"),
    expect = require("chai").expect,
    joiAssert = require("joi-assert");


// const fs = require('fs')
// const path = require('path');

//     // const {
// //     schemaLogin,  
// //   } = require("../schemas/planet_schema.js/index.js");
const request_timeout = 10000;


const { PATH_PLANET} = require('../url/baseUrl')

const URL = process.env.NODE_ENV;

describe("Testes de Contrato", function() { 
    it("Realizar Login",function(done) {
    this.timeout(request_timeout);
    request(URL)
    .get(PATH_PLANET)
    .expect("Content-Type", /json/)
    .end(function(err, res) {
        console.log(res.body) 
        // joiAssert(res.body, schemaLogin);
        done(err);
        });
    });
})
