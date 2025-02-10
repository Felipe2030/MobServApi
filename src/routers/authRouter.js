import express from 'express';
import AuthController from '../controllers/AuthController.js';

const authRouter = express.Router();
const authController = new AuthController();

authRouter.post('/login', (req, res) => authController.login(req, res));

export default authRouter;