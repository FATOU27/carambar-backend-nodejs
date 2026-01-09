const repo = require('../repositories/blague.repository');

module.exports = {
  getAll: () => repo.findAll(),

  getById: (id) => repo.findById(id),

  add: (data) => repo.create(data),

  getRandom: () => repo.findRandom()
};
