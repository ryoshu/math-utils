/*** math-utils/tests/impulse.js ***/

const mathutils = require('../index');

test('impulse scales the number 2 by 3 and returns 0.0404276819945128', () => {
	expect(mathutils.impulse(2, 3)).toBe(0.0404276819945128);
});