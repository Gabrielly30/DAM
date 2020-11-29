const dbConfig = require('../config/db.js');
const {Sequelize} = require('sequelize');

let connection = null;

const getConnection = () => {
  try{
    if(!connection){
      connection = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.DIALECT,
        //operatorsAliases: false,
        //logging:false
      });
    }
  }catch(err){
    console.error(err);
    process.exit(1);
  }
  
  return connection;
}

module.exports = {
  getConnection,
}