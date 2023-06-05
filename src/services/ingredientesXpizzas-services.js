import config from '../../dbconfig.js';
import sql from 'mssql';
import Pizza from '../models/pizza.js';
import Ingrediente from '../models/ingrediente.js';

class IngredienteXPizzaService {
    getAll = async() => {
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query(`SELECT Pizzas.Nombre, Ingredientes.Nombre, IngredientesXPizzas.Cantidad, Unidades.Nombre from IngredientesXPizzas
                inner join Ingredientes on Ingredientes.Id = IngredientesXPizzas.IdIngrediente
                inner join Unidades on Unidades.Id = IngredientesXPizzas.IdUnidad
                inner join Pizzas on Pizzas.id = IngredientesXPIzzas.IdPizza`);
                returnEntity = result.recordsets;
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    getById = async(id) => {
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query(`SELECT Ingredientes.Nombre, IngredientesXPizzas.Cantidad, Unidades.Nombre from IngredientesXPizzas
                inner join Ingredientes on Ingredientes.Id = IngredientesXPizzas.IdIngrediente
                inner join Unidades on Unidades.Id = IngredientesXPizzas.IdUnidad
                where IngredientesXPizzas.IdPizza = @pId`);
                returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
}

export default IngredienteXPizzaService;
