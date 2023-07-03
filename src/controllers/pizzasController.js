import { Router } from 'express';
import PizzaService from '../services/pizzas-services.js';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import UsuarioService from '../services/usuarios-services.js';

const router = Router();
const svcPizza = new PizzaService();
const svcUsuarios = new UsuarioService();

const verificacionLogin = async function (req, res, next) {
    if(req.headers.token != ''){
        let getByToken = await svcUsuarios.getByToken(req.headers.token);
        if(getByToken.TokenExpirationDate > new Date()){
            next();
        }else{
            res.send("token expirado");
        }
        
    } else{
        res.send("no se encontro token, logeate");
    }
    
}

router.get('', verificacionLogin, async (req, res, next) => {
    try {
        let GetAll = await svcPizza.getAll();
        res.send(GetAll);
    } catch (error) {
        res.send("error");
    }
});

router.get('/:id', verificacionLogin, async (req, res) => {
    try {
        let GetById = await svcPizza.getById(req.params.id);
        res.send(GetById);
    } catch (error) {
        res.send("error");
    }
});

router.post('', verificacionLogin, async (req, res) => {
    try {
        console.log(req.body);
        let svc2 = new Pizza();
        let pizzaNew = new svc2.constructor(
            req.body.Nombre,
            req.body.Libregluten,
            req.body.Importe,
            req.body.Descripcion
        );
        let Insert = await svcPizza.insert(pizzaNew);
        res.send(Insert);
    } catch (error) {
        res.send("error");
    }
});

router.put('/:id', verificacionLogin, async (req, res) => {
    try {
        console.log(req.body.Nombre);
        let svc2 = new Pizza();
        let pizzaNew = new svc2.constructor(
            req.body.Nombre,
            req.body.LibreGluten,
            req.body.Importe,
            req.body.Descripcion,
            req.body.Id
        );
        let update = await svcPizza.update(pizzaNew);
        res.send(update);
    } catch (error) {
        res.send("error");
    }
});

router.delete('/:id', verificacionLogin , async (req, res) => {
    try {
        let deleteById = await svcPizza.deleteById(req.params.id);
        res.send(deleteById);
    } catch (error) {
        res.send("error");
    }
});

export default router;