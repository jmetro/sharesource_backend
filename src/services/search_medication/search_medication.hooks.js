

const searchMedicationHook = require('../../hooks/search_medication_hook');

const methodNotAllowed = require('../../hooks/method-not-allowed');

module.exports = {
  before: {
    all: [],
    find: [searchMedicationHook()],
    get: [searchMedicationHook()],
    create: [methodNotAllowed()],
    update: [methodNotAllowed()],
    patch: [methodNotAllowed()],
    remove: [methodNotAllowed()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
