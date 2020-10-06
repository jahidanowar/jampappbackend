<<<<<<< HEAD
const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL ? process.env.DATABASE_URL : "");
=======
  const parse = require('pg-connection-string').parse;
  const config = parse(process.env.DATABASE_URL ? process.env.DATABASE_URL : '');
>>>>>>> 89fb63e5b9102592a80015ade36301693e5fe224

module.exports = ({ env }) => {
  if(env('NODE_ENV') === 'development'){
    return {
      defaultConnection: 'default',
      connections: {
        default: {
            connector: 'bookshelf',
            settings: {
            client: 'sqlite',
            filename: env('DATABASE_FILENAME', '.tmp/data.db'),
            },
            options: {
            useNullAsDefault: true,
            },
        },
      },
    }
  } else{
    return{
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'postgres',
            host: config.host,
            port: config.port,
            database: config.database,
            username: config.user,
            password: config.password,
          },
          options: {
            ssl: false,
          },
        },
      },
    }
  }
};
