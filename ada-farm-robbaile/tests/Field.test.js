const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const Field = require('../models/Field');


describe('Field Tests', () => {
    it('should create a new field', () => {
        let newField = new Field('Wheat field', 10, 25, 75, 350, 175);
        expect(newField).to.be.an.instanceOf(Field);
    });
});