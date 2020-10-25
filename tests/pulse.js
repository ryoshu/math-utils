/*** math-utils/tests/pulse.js ***/

const mathutils = require('../index');

test('pulse takes a center number of 5 a width number of 10 and a value number of 2 and returns 0.784. if the input value is larger than the width it returns 0.0', () => {
	expect(mathutils.pulse(5, 10, 2)).toBe(.784);
	expect(mathutils.pulse(5, 10, 20)).toBe(0.0);
});
