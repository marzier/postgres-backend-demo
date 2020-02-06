const dbEngine = process.env.DB || 'development';

// object bracket notation 
const config = require('../knexfile.js')[dbEngine];

module.exports = require('knex')(config);
