import PizzaService from "./src/services/pizzas-services.js";

var svc = new PizzaService;

let GetById = await svc.getById(2);
console.log(GetById);