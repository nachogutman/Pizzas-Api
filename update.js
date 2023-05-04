import PizzaService from "./src/services/pizzas-services.js";
import Pizza from "./src/models/pizza.js";

var svc = new PizzaService;
let svc2 = new Pizza;

let pizzaNew2 = new svc2.constructor(23, "Pizza salchipapa", 0, 3000, "Calidad pura y dura");
let update = await svc.update(pizzaNew2);
console.log(update);