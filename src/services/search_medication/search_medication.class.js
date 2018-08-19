/* eslint-disable no-unused-vars */
const errors = require('@feathersjs/errors');
const axios = require('axios');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    let token = null, list = [];

    const {username, password, medication_list} = params.query;
    try {
      token = await axios.post('https://api-dev.cardihab.app/v1/login', {username, password});
    } catch (e) {
      throw new errors.Forbidden('Invalid username or password', e);
    }
    if (!token.data) {
      throw new errors.Forbidden('Invalid username or password');
    }
    try {
      list = await axios({
        method: 'GET',
        headers: {'Authorization': `Bearer ${token.data}`},
        url: 'https://api-dev.cardihab.app/v1/medications/search?count=100&term=CORDARONE'
      });
    } catch (e) {
      throw new errors.NotFound(e.message, {medication_list});
    }

    return list.data;
    //return [];
  }

  async get(id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return {id};
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
