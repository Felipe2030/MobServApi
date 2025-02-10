import { Sequelize } from "sequelize";

const sequelize = new Sequelize('db_mobserv','root','root',{host: 'mysql',dialect: 'mysql'});

export default sequelize