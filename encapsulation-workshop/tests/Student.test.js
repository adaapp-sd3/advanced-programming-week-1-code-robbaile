const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const Student = require('../models/Student')

it('should run and pass the test', () => {
    expect(1 + 1).to.eql(2);
});

describe("Student class tests", () => {
    let newStudent = new Student("Rob Baile", 11, "11C");
    it('should create a new year group', () => {
        expect(newStudent).to.be.an.instanceOf(Student);
        expect(newStudent.name).to.equal("Rob Baile");
        expect(newStudent.year).to.equal(11);
        expect(newStudent.form).to.equal("11C");
    });
    it('should return name, yearGroup, formGroup', () => {
        expect(newStudent.getName()).to.equal("Rob Baile");
        expect(newStudent.getYearGroup()).to.equal(11);
        expect(newStudent.getFormGroup()).to.equal("11C");
    })
});