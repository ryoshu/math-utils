/*** math-utils/tests/rand-between-int.js ***/

const mathutils = require('../index');

test('randBetweenInt generates a random number between 0 and 10 and casts to an integer', () => {
	const value = mathutils.randBetweenInt(0, 10);
	expect(value).toBeGreaterThanOrEqual(0);
	expect(value).toBeLessThanOrEqual(10);
	expect(Number.isInteger(value)).toBeTruthy();
});