/*** math-utils/tests/lerp.js ***/

const mathutils = require('../index');

test('lerp does of linear interpolation of the number 0 to the number 5 over period .5 and returns 2.5', () => {
	expect(mathutils.lerp(0, 5, .5)).toBe(2.5);
});