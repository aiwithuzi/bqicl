require('dotenv').config();

const dbHost = process.env.DB_HOST || process.env.HOST || '127.0.0.1';
const dbPort = Number(process.env.DB_PORT || process.env.PORT || 4000);
const dbUser = process.env.DB_USER || (process.env.USERNAME && process.env.USERNAME !== 'uzair' ? process.env.USERNAME : process.env.DB_USER);
const dbPassword = process.env.DB_PASSWORD || process.env.PASSWORD || '';
const dbName = process.env.DB_NAME || process.env.DATABASE || 'Auction';
const isTiDB = dbHost.includes('tidbcloud.com');
const enableSSL = process.env.DB_SSL === 'true' || isTiDB;

const sslOptions = enableSSL ? {
  require: true,
  rejectUnauthorized: false
} : false;

const dbConfig = {
  username: dbUser,
  password: dbPassword,
  database: dbName,
  host: dbHost,
  port: dbPort,
  dialect: 'mysql',
  dialectOptions: {
    ssl: sslOptions
  }
};

module.exports = {
  development: dbConfig,
  test: dbConfig,
  production: {
    ...dbConfig,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};