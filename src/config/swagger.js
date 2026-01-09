const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Carambar API',
    version: '1.0.0',
    description: 'API de blagues Carambar (Node / Express / Sequelize)',
  },
  servers: [
    {
      url: 'http://localhost:8080',
      description: 'Serveur local'
    }
  ]
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js']
};

module.exports = swaggerJSDoc(options);
