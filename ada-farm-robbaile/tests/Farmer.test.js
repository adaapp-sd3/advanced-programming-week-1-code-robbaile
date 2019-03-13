const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const Farmer = require('../models/Farmer');



describe('Farmer Tests', () => {
    it('should create a new farmer', () => {
        let newFarmer = new Farmer("Shorty");
        expect(newFarmer.userName).to.eql("Shorty")
    });
});