/*** math-utils/tests/rand-between.js ***/

const mathutils = require('../index');

test('randBetween generates a random number between 0 and 10', () => {
	const value = mathutils.randBetween(0, 10);
	expect(value).toBeGreaterThanOrEqual(0);
	expect(value).toBeLessThanOrEqual(10);
});