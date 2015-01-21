/*global require, describe, it */
/*jslint node: true, expr: true */

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var mda = require('../MultiDimensionalArray.js');
 
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
          expect(result[i][j]).to.satisfy(function(val) {return (val === 0 || val === 1)});
        }
      }
    }


  })
});
