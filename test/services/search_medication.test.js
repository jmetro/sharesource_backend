const assert = require('assert');
const app = require('../../src/app');

describe('\'search_medication\' service', () => {
  it('registered the service', () => {
    const service = app.service('search_medication');

    assert.ok(service, 'Registered the service');
  });
});
