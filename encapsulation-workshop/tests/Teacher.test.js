const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const Teacher = require('../models/Teacher');

it('should run and pass the test', () => {
    expect(1 + 1).to.eql(2);
});

describe('Teacher tests', () => {
    let newTeacher = new Teacher();
    it('should create a teacher class', () => {
        expect(newTeacher).to.be.an.instanceOf(Teacher);
    });
})