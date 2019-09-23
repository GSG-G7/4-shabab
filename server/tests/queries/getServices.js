const test = require('tape');
const { getServices } = require('../../db/queries/getServices');

exports.getServices = test('testing for getServices', async (t) => {
  const expected = true;
  const obj = await getServices();
  const actual = !!(obj.rows.length);

  t.equal(actual, expected, 'TESTING services');
  t.end();
});
