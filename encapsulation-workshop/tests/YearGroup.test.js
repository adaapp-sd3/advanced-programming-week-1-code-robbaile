const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const YearGroup = require('../models/YearGroup')

it('should run and pass the test', () => {
    expect(1 + 1).to.eql(2);
});

describe("YearGroup class tests", () => {
    let myYearGroup = new YearGroup(11, "EW");
    it('should create a new year group', () => {
        expect(myYearGroup).to.be.an.instanceOf(YearGroup);
        expect(myYearGroup.year).to.equal(11);
        expect(myYearGroup.head).to.be.string("EW");
    });
    it('should return the year and head initials', () => {
        expect(myYearGroup.getYear()).to.eql(11);
        expect(myYearGroup.getHead()).to.eql("EW");
    })
});