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
     url: 'https://carambar-backend-nodejs.onrender.com/',
      description: 'Production server'
    }
  ]
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js']
};

module.exports = swaggerJSDoc(options);
