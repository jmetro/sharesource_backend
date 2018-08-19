const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const searchMedicationHook = require('../../src/hooks/search_medication_hook');

describe('\'search_medication_hook\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/search_medication', {
      async get(id) {
        return { id };
      }
    });

    app.service('search_medication').hooks({
      before: searchMedicationHook()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
