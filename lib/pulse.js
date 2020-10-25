/*** math-utils/lib/pulse.js ***/
/**
 * 
 * 
 * 
 * 
 */

module.exports = function(center, width, val) {
	val = Math.abs(val - center);
	if (val > width) {
		return 0.0;
	}
	val /= width;

	return 1.0 - val * val * (3.0 - 2.0 * val);
}