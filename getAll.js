import PizzaService from "./src/services/pizzas-services.js";

var svc = new PizzaService;

let GetAll = await svc.getAll();
console.log(GetAll);