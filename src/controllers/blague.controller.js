const service = require('../services/blague.service');

exports.getAll = async (req, res) => {
  res.json(await service.getAll());
};

exports.getById = async (req, res) => {
  const blague = await service.getById(req.params.id);
  blague ? res.json(blague) : res.status(404).json({ message: 'Not found' });
};

exports.add = async (req, res) => {
  const blague = await service.add(req.body);
  res.status(201).json(blague);
};

exports.random = async (req, res) => {
  res.json(await service.getRandom());
};
