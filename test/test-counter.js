var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
 
var mda = require('../MultiDimensionalArray.js');

describe("MultiDimensionalArray.count", function() {
  it("should return number of elements in array that evaluate to true", function() {
    var sample_array = [1,0,0,1,0,0,0,0,1];
    expect(mda.count(sample_array)).to.equal(3);
  });

  it("should return number of elements in array that evaluate to true", function() {
    var sample_array = [[[1,0,0],1],0,0,0,0,1];
    expect(mda.count(sample_array)).to.equal(3);
  });

  it("should allow searching for a specific value", function() {
    var sample_array = [[[1,0,[2],0],1],2,0,0,2,1];
    expect(mda.count(sample_array, 2)).to.equal(3);
  });
});

