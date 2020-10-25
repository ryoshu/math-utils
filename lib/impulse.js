/*** math-utils/lib/impulse.js ***/
/**
 * 
 * 
 * 
 * 
 */

module.exports = function(k, x) {
	const h = k * x;
	return h * Math.exp(1.0-h);
};