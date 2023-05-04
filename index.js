import express from "express";
import PizzaService from "./src/services/pizzas-services.js";

const app = express();
const port = 912;


app.get('/', (req, res) => {
    try{
        let svc = new PizzaService;
        let GetAll = svc.getAll();
        res.send(GetAll);
    } catch (error){
        res.send('error');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})