require('dotenv').config();

const DB_CONN_STRING = process.env.DB_CONN_STRING || 'mongodb+srv://<USER_NAME_VALUE>:<PASSWORD_VALUE>@cluster0.9a4zdvt.mongodb.net/?retryWrites=true&w=majority';

module.exports = {
  api: {
    port: parseInt(process.env.API_PORT) || 4000,
    allowedOrigin: process.env.ALLOWED_ORIGIN || '*'
  },
  database: {
    uri: DB_CONN_STRING,
    collections: {
      notes: 'notes'
    }
  }
};
