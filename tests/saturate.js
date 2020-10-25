/*** math-utils/tests/saturate.js ***/

const mathutils = require('../index');

test('saturate returns val to the saturated range between [0,1]: returns 0 if x is less than 0; returns 1 if x is greater than 1; returns x otherwise', () => {
	expect(mathutils.saturate(-1)).toBe(0);
	expect(mathutils.saturate(2)).toBe(1);
	expect(mathutils.saturate(.5)).toBe(.5);
});