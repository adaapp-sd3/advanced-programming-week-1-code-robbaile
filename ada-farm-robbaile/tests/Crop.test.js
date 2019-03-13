const assert = require('assert');
const expect = require('chai').expect;

const Crop = require('../models/Crop');


describe('Crop Tests', () => {
    it('should create a new crop', () => {
        let newCrop = new Crop("Wheat", "Wheat field", 20, 20);
        expect(newCrop).to.be.an.instanceOf(Crop);
    });
});