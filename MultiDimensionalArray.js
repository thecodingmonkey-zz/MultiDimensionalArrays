var mda = {
  var default_array_size = 3;

  generate_1d: function(tier1) {
    if (tier1 === undefined) {  // default parameters
      tier1 = default_array_size;
    }

    var result = [];
    for(var i=0; i < tier1; i++) {
      // val = a random value, either 0 or 1.  did NOT use a ternary here
      var val = 0;
      if (Math.random() > 0.5) {
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

  count: function(array) {

    var countTruthy = function(val) {
      // find # of truthy values if val is an array
      if (Array.isArray(val)) {
        return val.reduce( function(prev, next) {
          return prev + countTruthy(next);
        }, 0 );
      }

      // return a number based on the truthy value of the argument
      // if it is not an array
      if (val) {
        return 1;
      }
      return 0;
    }

    return countTruthy(array);
  }
};

module.exports = mda;