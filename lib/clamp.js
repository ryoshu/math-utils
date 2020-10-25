/*** math-utils/lib/clamp.js ***/
/**
 * 
 * 
 * 
 * 
 */

module.exports = function(x, a, b) {
	return Math.max(a, Math.min(x, b));
};