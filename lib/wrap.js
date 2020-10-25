/*** math-utils/lib/wrap.js ***/
/**
 * 
 * 
 * 
 * 
 */

 module.exports = function(val, min, max) {
	val -= min;

	const delta = max - min;
	if (delta < 0.0001) {
		return val;
	}

	return val - (delta * Math.floor(val / delta)) + min;
}