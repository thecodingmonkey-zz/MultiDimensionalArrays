var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
 
var mda = require('../MultiDimensionalArray.js');


var isZeroOrOne = function(x) {
  return (x === 0 || x === 1);
}

describe("generate", function() {
  it("should return a deep array given parameters (y^x)", function() {
    var result = mda.generate(2, 4);

    expect(result).to.have.length(4);
    result.forEach(function(subArray) {
      expect(subArray).to.have.length(4);
    });

    result = mda.generate(4, 3);
    expect(result).to.have.length(3);
    result.forEach(function(subArray1) {
      expect(subArray1).to.have.length(3);
      subArray1.forEach(function(subArray2) {
        expect(subArray2).to.have.length(3);
        subArray2.forEach(function(subArray3) {
          expect(subArray3).to.have.length(3);
        });
      });
    });
  });
});

