import PizzaService from "../src/services/pizzas-services.js";

var svc = new PizzaService;

let DeleteById = await svc.deleteById(4);
console.log(DeleteById);