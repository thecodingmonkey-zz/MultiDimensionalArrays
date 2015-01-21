var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
 
var mda = require('../MultiDimensionalArray.js');

describe('generate_1d', function() {
  it('should generate an array', function() {
    var result = mda.generate_1d(3);
    expect(result).to.be.an('array');
  });

  it("should generate a specified length", function() {
    var result = mda.generate_1d(3);
    expect(result).to.have.length(3);
    var result = mda.generate_1d(10);
    expect(result).to.have.length(10);
    var result = mda.generate_1d(31415);
    expect(result).to.have.length(31415);
  });

  it("should contain all zeroes and ones", function() {
    var result = mda.generate_1d(100);
    var val;
    for (val in result) {
      expect(result[val]).to.satisfy(function(x) {return (x === 0 || x === 1);});
    }
//    expect(result).

  });
});