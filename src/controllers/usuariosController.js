import { Router } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import UsuarioService from '../services/usuarios-services.js';

const router = Router();
const svc = new UsuarioService();

router.post('/login', async (req, res) => {
    try {
        let login = await svc.login(req.body.UserName, req.body.Password);
        res.send(login);
    } catch (error) {
        res.send("error");
    }
});


export default router;