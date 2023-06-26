import express from "express";
import cors    from "cors";
import PizzaRouter from "./src/controllers/pizzasController.js";
import UsuarioRouter from "./src/controllers/usuariosController.js"

const app  = express();
const port = 5000;                  

app.use(cors());                    
app.use(express.json());            
app.use(express.static('public'));  

app.use("/api/usuarios", UsuarioRouter);
app.use("/api/pizzas", PizzaRouter);

app.listen(port, () => {
  console.log(`"server-router" Listening on port ${port}`);
});
