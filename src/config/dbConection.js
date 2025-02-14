import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME || 'db_mobserv',   // Nome do banco
  process.env.DB_USER || 'root',         // Usuário do banco
  process.env.DB_PASSWORD || 'root',     // Senha do banco
  {
    host: process.env.DB_HOST || 'db',   // O nome do serviço do MySQL no Docker
    port: process.env.DB_PORT || 3306,   // Porta do MySQL
    dialect: 'mysql',
    logging: false,                      // Desativa logs desnecessários no console
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o MySQL estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar no MySQL:", error);
  }
})();

export default sequelize;
