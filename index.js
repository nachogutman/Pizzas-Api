import express from "express";
import PizzaService from "./src/services/pizzas-services.js";
import Pizza from "./src/models/pizza.js";

const app = express();
const port = 912;
let svc = new PizzaService();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    let GetAll = await svc.getAll();
    res.send(GetAll);
  } catch (error) {
    res.send("error");
  }
});

app.get("/getById/:id", async (req, res) => {
  try {
    let GetById = await svc.getById(req.params.id);
    res.send(GetById);
  } catch (error) {
    res.send("error");
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    let deleteById = await svc.deleteById(req.params.id);
    res.send(deleteById);
  } catch (error) {
    res.send("error");
  }
});

app.post("/insert", async (req, res) => {
  try {
    let svc2 = new Pizza();
    let pizzaNew = new svc2.constructor(
      req.query.nombre,
      req.query.libregluten,
      req.query.importe,
      req.query.descripcion
    );
    let Insert = await svc.insert(pizzaNew);
    res.send(Insert);
  } catch (error) {
    res.send("error");
  }
});

app.put("/update", async (req, res) => {
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
