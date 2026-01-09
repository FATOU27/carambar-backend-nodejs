const fs = require('fs');
const path = require('path');
const Blague = require('../models/Blague');

async function seedBlagues() {
  const count = await Blague.count();

  if (count > 0) {
    console.log(' Blagues déjà chargées');
    return;
  }

  const filePath = path.join(__dirname, '../data/blagues.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  await Blague.bulkCreate(data);
  console.log(' Blagues chargées depuis blagues.json');
}

module.exports = seedBlagues;
