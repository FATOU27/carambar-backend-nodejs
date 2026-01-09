const app = require('./app');
const sequelize = require('./config/database');
const seedBlagues = require('./config/seed');

const PORT = 8080;

sequelize.sync().then(async () => {
  await seedBlagues();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
