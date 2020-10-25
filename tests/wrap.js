/*** math-utils/tests/wrap.js ***/

const mathutils = require('../index');

test('wrap takes value 5 with a nimimum range of 1 and a maximum range of 4 and returns a value of 2. if max - min is less than 0.0001 it will return the initial value', () => {
	expect(mathutils.wrap(5, 1, 4)).toBe(2);
	expect(mathutils.wrap(5, 0, 0)).toBe(5)
});