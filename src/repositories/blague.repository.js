const Blague = require('../models/Blague');

module.exports = {
  findAll: () => Blague.findAll(),

  findById: (id) => Blague.findByPk(id),

  create: (data) => Blague.create(data),

  findRandom: async () => {
    const count = await Blague.count();
    const random = Math.floor(Math.random() * count);
    return Blague.findOne({ offset: random });
  }
};
