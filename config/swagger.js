// config/swagger.js
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Fancy Dress Rental API",
    version: "1.0.0",
    description: "API documentation for the Fancy Dress Rental application",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
    },
    {
      url: "https://fancy-dress-rentel-app-api.vercel.app/api",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js", "./controllers/*.js"], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };
