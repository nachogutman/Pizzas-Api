import config from '../../dbconfig.js';
import sql from 'mssql';
import Pizza from '../models/pizza.js';

class PizzaService {
    getAll = async () => {
        let returnEntity = null;
        console.log('Estoy en: PizzaService.GetAll');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Pizzas');
            returnEntity = result.recordsets;
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    getById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PizzaService.GetById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT * FROM Pizzas WHERE id = @pId');
            returnEntity = result.recordsets;
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    insert = async (pizza) => {
        let rowsAffected = 0;
        console.log(pizza);
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre', sql.VarChar, pizza.Nombre)
                .input('pLibreGluten', sql.Bit, pizza.LibreGluten)
                .input('pImporte', sql.Float, pizza.Importe)
                .input('pDescripcion', sql.VarChar, pizza.Descripcion)
                .query('INSERT INTO Pizzas(Nombre, LibreGluten, Importe, Descripcion) VALUES (@pNombre, @pLibreGluten, @pImporte, @pDescripcion)');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    update = async (pizza) => {
        let rowsAffected = 0;
        console.log(pizza);
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre', sql.VarChar, pizza.Nombre)
                .input('pLibreGluten', sql.Bit, pizza.LibreGluten)
                .input('pImporte', sql.Float, pizza.Importe)
                .input('pDescripcion', sql.VarChar, pizza.Descripcion)
                .input('pId', sql.Int, pizza.Id)
                .query('UPDATE Pizzas SET Nombre = @pNombre, LibreGluten = @pLibreGluten, Importe = @pImporte, Descripcion = @pDescripcion WHERE Id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    /* */
    deleteById = async (id) => {
        let rowsAffected = 0;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('DELETE FROM Pizzas WHERE Id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default PizzaService;
