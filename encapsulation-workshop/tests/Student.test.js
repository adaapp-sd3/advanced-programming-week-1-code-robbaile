const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const Student = require('../models/Student')

it('should run and pass the test', () => {
    expect(1 + 1).to.eql(2);
});

describe("Student class tests", () => {
    let newStudent = new Student();
    it('should create a new year group', () => {
        expect(newStudent).to.be.an.instanceOf(Student);
    });
});