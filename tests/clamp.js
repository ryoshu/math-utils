/*** math-utils/tests/clamp.js ***/

const mathutils = require('../index');

test('clamp returns the input value x to the minimum and maximum values [a,b]: returns a if x is less than a; returns b if x is greater than b; otherwise it returns x. in this test case x = 5, a=1, b=2. expected output is 2.', () => {
	expect(mathutils.clamp(5, 1, 2)).toBe(2);
});