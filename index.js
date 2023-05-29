import express from "express";
import PizzaService from "./src/services/pizzas-services.js";
import Pizza from "./src/models/pizza.js";
import cors from "cors";

const app = express();
const port = 912;
let svc = new PizzaService();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get("/api/pizzas", async (req, res) => {
  try {
    let GetAll = await svc.getAll();
    res.send(GetAll);
  } catch (error) {
    res.send("error");
  }
});

app.get("/api/pizzas/:id", async (req, res) => {
  try {
    let GetById = await svc.getById(req.params.id);
    res.send(GetById);
  } catch (error) {
    res.send("error");
  }
});

app.delete("/api/pizzas/:id", async (req, res) => {
  try {
    let deleteById = await svc.deleteById(req.params.id);
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
    let Insert = await svc.insert(pizzaNew);
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
    let update = await svc.update(pizzaNew);
    res.send(update);
  } catch (error) {
    res.send("error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
