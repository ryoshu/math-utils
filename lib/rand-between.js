/*** math-utils/lib/rand-between.js ***/
/**
 * 
 * 
 * 
 * 
 */

module.exports = function(min, max) {
	return min + (max - min) * Math.random();
};