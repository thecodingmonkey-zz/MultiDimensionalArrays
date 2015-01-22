/*global require, describe, it */
/*jslint node: true, expr: true */

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var mda = require('../MultiDimensionalArray.js');
 
describe('MultiDimensionalArray', function() {
  it('should return the count for boolean values, val=true', function() {
    var sample_array = [1,0,0,1,0,0,0,0,1]; 
    expect(mda.count(sample_array, true)).to.equal(3);
  });
  it('should return the count for boolean values, val=false', function() {
    var sample_array = [[1,0],[0,1],[0,0],[0,0]];
    expect(mda.count(sample_array, false)).to.equal(6);
  });
  it("should return the count for non-boolean values", function() {
    var sample_array = [  
      [  
        ["red","green","blue"],  
        ["red","green","blue"],  
        ["red","green","blue"],  
      ],  
      [  
        ["red","green","red"],  
        ["red","green","red"],  
        ["red","green","red"],  
      ],  
      [  
        ["red","red","blue"],  
        ["red","red","blue"],  
        ["red","red","blue"],  
      ],  
    ];  
    expect(mda.count(sample_array, 'red')).to.equal(15);
  });
});
