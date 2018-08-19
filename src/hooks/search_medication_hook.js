// Use this hook to manipulate incoming or outgoing params.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
const errors = require('@feathersjs/errors');
const axios = require('axios');

module.exports = function (options = {}) {
  return async context => {
    const {params} = context;
    const {username, password, medication_list} = params.query;
    let token = null;

    if(!username){
      throw new errors.BadRequest(`Username required`, {
        username: null
      });
    }
    if(!password)
      throw new errors.BadRequest(`Password required`, {
        password: null
      });
    if(!medication_list){
      throw new errors.BadRequest(`Medication list required`, {
        medication_list: null
      });
    }
    return context;
  };
};
