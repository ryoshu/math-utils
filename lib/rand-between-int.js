/*** math-utils/lib/rand-between-int.js ***/
/**
 * 
 * 
 * 
 * 
 */

module.exports = function(min, max) {
	return Math.floor(min + (max - min) * Math.random());
};