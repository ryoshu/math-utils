/*** math-utils/lib/saturate.js ***/
/**
 * 
 * 
 * 
 * 
 */

module.exports = function(x) {
	return Math.max(0.0, Math.min(x, 1.0));
};