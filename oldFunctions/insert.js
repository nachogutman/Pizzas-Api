import PizzaService from "../src/services/pizzas-services.js";
import Pizza from "../src/models/pizza.js";

var svc = new PizzaService;
let svc2 = new Pizza;

let pizzaNew = new svc2.constructor('Pizza prueba', 0, 3000, "d pura");
let Insert = await svc.insert(pizzaNew);
console.log(Insert);