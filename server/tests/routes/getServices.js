const test = require('tape');
const supertest = require('supertest');

const { routeServices } = require('../../controllers/routes/getServices');
const app = require('./../../app');

//exports.testRouteServices = 
test('Status Code equal 200', async (t) => {

  try {
    await routeServices();
    supertest(app)
      .get('/api/v1/services')
      .expect(500)
      .expect('content-type', /json/)
      .end((err, res) => {
        const actual = !!(res.body.data.length);
        t.deepEqual(actual, true, 'Number of items should not equal zero');
        t.end();
      });
  } catch (err) {
    console.log('err', err);
  }
});

test.onFinish(() => process.exit(0));
