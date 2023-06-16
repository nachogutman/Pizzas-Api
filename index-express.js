import express from "express";

import Pizza from "./src/models/pizza.js";
import Ingrediente from "./src/models/ingrediente.js";

import PizzaService from "./src/services/pizzas-services.js";
import IngredienteService from "./src/services/ingredientes-services.js";
import IngredienteXPizzaService from "./src/services/ingredientesXpizzas-services.js";
import UnidadService from "./src/services/unidades-services.js";

import router from "./src/controllers/pizzasController.js";
import cors from "cors";

const app = express();
const port = 5000;

let svcPizza = new PizzaService();
let svcIngre = new IngredienteService();
let svcJoin = new IngredienteXPizzaService();
let svcUni = new UnidadService();

app.use(cors());
app.use(express.json());
app.use("/api/pizzas", router);

app.get("/api/pizzas", async (req, res) => {
  try {
    let GetAll = await svcPizza.getAll();
    res.send(GetAll);
  } catch (error) {
    res.send("error");
  }
});

app.get("/api/pizzas/:id", async (req, res) => {
  try {
    let GetById = await svcPizza.getById(req.params.id);
    res.send(GetById);
  } catch (error) {
    res.send("error");
  }
});

app.delete("/api/pizzas/:id", async (req, res) => {
  try {
    let deleteById = await svcPizza.deleteById(req.params.id);
    res.send(deleteById);
  } catch (error) {
    res.send("error");
  }
});

app.post("/api/pizzas", async (req, res) => {
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

app.put("/api/pizzas/:id", async (req, res) => {
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

//INGREDIENTES

app.get("/api/ingredientes", async (req, res) => {
  try {
    let GetAll = await svcIngre.getAll();
    res.send(GetAll);
  } catch (error) {
    res.send("error");
  }
});

app.get("/api/ingredientes/:id", async (req, res) => {
  try {
    let GetById = await svcIngre.getById(req.params.id);
    res.send(GetById);
  } catch (error) {
    res.send("error");
  }
});

app.delete("/api/ingredientes/:id", async (req, res) => {
  try {
    let deleteById = await svcIngre.deleteById(req.params.id);
    res.send(deleteById);
  } catch (error) {
    res.send("error");
  }
});

app.post("/api/ingredientes", async (req, res) => {
  try {
    console.log(req.body);
    let svc2 = new Ingrediente();
    let ingreNew = new svc2.constructor(
      req.body.Nombre,
    );
    let Insert = await svcIngre.insertIngredientes(ingreNew);
    res.send(Insert);
  } catch (error) {
    res.send("error");
  }
});

app.put("/api/ingredientes/:id", async (req, res) => {
  try {
    console.log(req.body.Nombre);
    let svc2 = new Ingrediente();
    let ingreNew = new svc2.constructor(
      req.body.Nombre,
      req.body.Id
    );
    let update = await svcIngre.update(ingreNew);
    res.send(update);
  } catch (error) {
    res.send("error");
  }
});

//INGREDIENTESXPIZZA

app.get("/api/ingredientesXpizzas", async (req, res) => {
  try {
    let GetAll = await svcJoin.getAll();
    res.send(GetAll);
  } catch (error) {
    res.send("error");
  }
});

app.get("/api/ingredientesXpizzas/:id", async (req, res) => {
  try {
    let GetById = await svcJoin.getById(req.params.id);
    res.send(GetById);
  } catch (error) {
    res.send("error");
  }
});

//UNIDADES

app.get("/api/unidades", async (req, res) => {
  try {
    let GetAll = await svcUni.getAll();
    res.send(GetAll);
  } catch (error) {
    res.send("error");
  }
});

app.get("/api/unidades/:id", async (req, res) => {
  try {
    let GetById = await svcUni.getById(req.params.id);
    res.send(GetById);
  } catch (error) {
    res.send("error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
