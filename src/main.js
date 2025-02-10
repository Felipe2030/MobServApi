import express from "express";
import dotenv from "dotenv";
import logMiddleware from "./middlewares/logMiddleware.js";
import router from "./routers/index.js";
import sequelize from "./config/dbConection.js";
import cors from "cors";

const app = express();

dotenv.config({ path: '.env' })

app.use(cors());
app.use(express.json())
app.use(logMiddleware);
app.use('/api', router);

app.listen(process.env.PORT, '0.0.0.0', () => { console.log(`Servidor rodando na porta ${process.env.PORT}`); });

sequelize.authenticate()
.then(() => { console.log('Banco de dados conectado com sucesso!'); })
.catch((error) => { console.error('Problema na ao conectar com o banco de dados!', error); });