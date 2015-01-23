var default_array_size = 3;
var HALFSIES = 0.5;

module.exports = {
  generate: function() {
    var args = [].slice.call(arguments);

    // default case if no parameters are set
    if (args.length === 0) {
      args = [3,3];
    }

    // case if a non-number is passed as a size
    if (typeof(args[0]) != 'number') {
      return [];
    }

    // extract the array out if this function was called recursively
    if (args[1] === undefined) {
      args = args[0];
    }

    // if only one parameter is specified, generate a 1d array
    if (args[1] === undefined && Array.isArray(args[0]) === false) {
      return this.generate_1d(args);
    }

    // make the array.  it recursively calls itself to make each element
    var result = [], i, loopsize = args.shift();
    for(i=0; i < loopsize; i++) {
      var subArraySize = args;
      result.push(this.generate.apply(this, args) );
    }
    return result;
  },

  generate_1d: function(tier1) {
    if (tier1 === undefined) {  // default parameters
      tier1 = default_array_size;
    }

    var result = [];
    for(var i=0; i < tier1; i++) {
      // val = a random value, either 0 or 1.  did NOT use a ternary here
      var val = 0;
      if (Math.random() > HALFSIES) {
        val = 1;
      }

      result.push(val);
    }
    return result;
  },

  generate_2d: function(tier1, tier2) {
    // supply default parameters
    if (tier1 === undefined) {
      tier1 = default_array_size;
    }
    if (tier2 === undefined) {
      tier2 = default_array_size;
    }

    var result = [];
    for(var i=0; i < tier1; i++) {
      // process is similar to generate_1d, just generates a 1d array
      // for each element instead of a single 1/0 element
      var val = this.generate_1d(tier2);

      result.push(val);
    }
    return result;
  },

  generate_3d: function(tier1, tier2, tier3) {
    var result = [];
    // process is similar to the 2d array loop
    for(var i=0; i < tier1; i++) {
      var val = this.generate_2d(tier2, tier3);
      result.push(val);
    }

    return result;
  },

  count: function(array, matchValue) {

    var countTruthy = function(val, matchValue) {
      // find # of truthy values if val is an array
      if (Array.isArray(val)) {
        return val.reduce( function(prev, next) {
          return prev + countTruthy(next, matchValue);
        }, 0 );
      }

      // return a number based on the truthy value of the argument
      // if it is not an array
      if ((val && matchValue === undefined) || // default case, check if truthy
        (val === matchValue && matchValue != undefined) ||  // non-truthy check
        (val == matchValue && typeof(matchValue) == 'boolean')) { 
                              // truthy check if matchValue is a boolean
        return 1;
      }
      return 0;
    }

    return countTruthy(array, matchValue);
  }
}