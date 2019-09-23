const tape = require('tape');

// const { testRouteServices } = require('./getServices');

tape('Simple pass test', (t) => {
  t.equal(1, 1, 'one should equal one');
  t.end();
});
require('./getServices');