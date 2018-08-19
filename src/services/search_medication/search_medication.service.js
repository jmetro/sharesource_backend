// Initializes the `search_medication` service on path `/search_medication`
const createService = require('./search_medication.class.js');
const hooks = require('./search_medication.hooks');

module.exports = function (app) {
  const options = {
  };

  // Initialize our service with any options it requires
  app.use('/search_medication', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('search_medication');

  service.hooks(hooks);
};
