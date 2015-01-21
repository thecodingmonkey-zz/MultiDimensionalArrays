var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
 
var mda = require('../MultiDimensionalArray.js');


var isZeroOrOne = function(x) {
  return (x === 0 || x === 1);
}

describe('generate_1d', function() {
  it("should return an array(length 3) with no arguments with random boolean values", function() {
    var result = mda.generate_1d();
    expect(result).to.have.length(3);

    var val;
    for (val in result) {
      expect(result[val]).to.satisfy(isZeroOrOne);
    }
  });

  it("should return an array(4) with random boolean values when passed 4 as an argument", function() {
    var result = mda.generate_1d(4);
    expect(result).to.have.length(4);

    var val;
    for (val in result) {
      expect(result[val]).to.satisfy(isZeroOrOne);
    }
  });

  it("should return an empty array when passed 'potato'", function() {
    var result = mda.generate_1d('potato');
    expect(result).to.have.length(0);
  });

});