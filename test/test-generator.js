/*global require, describe, it */
/*jslint node: true, expr: true */

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var mda = require('../MultiDimensionalArray.js');
 
var isZeroOrOne = function(x) {
  return (x === 0 || x === 1);
}

describe('generate', function() {
  it('should be a function', function() {
    expect(mda.generate).to.be.a('function');
  });

  it('should return a 3x3 array with no parameters', function() {
    var result = mda.generate();
    expect(result).to.be.a('array');
    expect(result).to.have.length(3);

    if (result.length !== undefined) {
      for(var i=0; i < result.length; i++) {
        expect(result[i]).to.have.length(3);
      }
    }

    expect(result)
  });

  it('should consist of elements that are all 0\'s or 1\'s', function() {
    var result = mda.generate();

    if (result.length !== undefined) {
      for(var i=0; i < result.length; i++) {
        for(var j=0; j < result[i].length; j++) {
          expect(result[i][j]).to.satisfy(isZeroOrOne);
        }
      }
    }
  })

  it("should return a 1-dimensional array with one parameter", function() {
    var result = mda.generate(4);
    expect(result).to.have.length(4);

    for(var i=0; i < result.length; i++) {
        expect(result[i]).to.satisfy(isZeroOrOne);
    }

  });
});

describe('generate, 1d cases', function() {
  it("should return an array(4) with random boolean values when passed 4 as an argument", function() {
    var result = mda.generate(4);
    expect(result).to.have.length(4);

    result.forEach(function(val) {
      expect(val).to.satisfy(isZeroOrOne);
    });
  });

  it("should return an empty array when passed 'potato'", function() {
    var result = mda.generate('potato');
    expect(result).to.have.length(0);
  });

});

describe("generate, 2d cases", function() {
  it("should return a 5x4 when passed two parameters (5,4)", function() {
    var result = mda.generate(5,4);
    expect(result).to.have.length(5);

    result.forEach(function(subArray) {
      expect(subArray).to.have.length(4);

      subArray.forEach(function(element) {
        expect(element).to.satisfy(isZeroOrOne);
      });
    });
  });  
});

describe("generate, 3d cases", function() {
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
