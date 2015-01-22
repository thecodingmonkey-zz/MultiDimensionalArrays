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

    result.forEach(function(val) {
      expect(val).to.satisfy(isZeroOrOne);
    })
  });

  it("should return an array(4) with random boolean values when passed 4 as an argument", function() {
    var result = mda.generate_1d(4);
    expect(result).to.have.length(4);

    result.forEach(function(val) {
      expect(val).to.satisfy(isZeroOrOne);
    });
  });

  it("should return an empty array when passed 'potato'", function() {
    var result = mda.generate_1d('potato');
    expect(result).to.have.length(0);
  });

});

describe("generate_2d", function() {
  it("should return a 3x3 array when passed no parameters", function() {
    var result = mda.generate_2d();
    expect(result).to.have.length(3);

    result.forEach(function(subArray) {
      expect(subArray).to.have.length(3);

      subArray.forEach(function(element) {
          expect(element).to.satisfy(isZeroOrOne);
      });

    });
  });

  it("should return a 4x3 when passed one parameter (4)", function() {
    var result = mda.generate_2d(4);
    expect(result).to.have.length(4);

    result.forEach(function(subArray) {
      expect(subArray).to.have.length(3);

      subArray.forEach(function(element) {
        expect(element).to.satisfy(isZeroOrOne);
      });
    });
  });  

  it("should return a 5x4 when passed two parameters (5,4)", function() {
    var result = mda.generate_2d(5,4);
    expect(result).to.have.length(5);

    result.forEach(function(subArray) {
      expect(subArray).to.have.length(4);

      subArray.forEach(function(element) {
        expect(element).to.satisfy(isZeroOrOne);
      });
    });
  });  
});

describe("generate_3d", function() {
  it("should generate a 3-dimensional array when passed three parameters", function() {
    var result = mda.generate_3d(5,4,3);
    expect(result).to.have.length(5);

    result.forEach(function(outerArray) {
      expect(outerArray).to.have.length(4);
      outerArray.forEach(function(innerArray) {
        expect(innerArray).to.have.length(3);
        innerArray.forEach(function(element) {
          expect(element).to.satisfy(isZeroOrOne);
        });
      });
    });
  });
});

