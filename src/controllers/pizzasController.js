import { Router } from 'express';
import PizzaService from '../services/pizzas-services.js';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const router = Router();
const svcPizza = new PizzaService();

router.get('', async (req, res) => {
    try {
        let GetAll = await svcPizza.getAll();
        res.send(GetAll);
    } catch (error) {
        res.send("error");
    }
});

router.get('/:id', async (req, res) => {
    try {
        let GetById = await svcPizza.getById(req.params.id);
        res.send(GetById);
    } catch (error) {
        res.send("error");
    }
});

router.post('', async (req, res) => {
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

router.put('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
    try {
        let deleteById = await svcPizza.deleteById(req.params.id);
        res.send(deleteById);
    } catch (error) {
        res.send("error");
    }
});

export default router;