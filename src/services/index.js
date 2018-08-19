const searchMedication = require('./search_medication/search_medication.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(searchMedication);
};
