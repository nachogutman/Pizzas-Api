import config from '../../dbconfig.js';
import sql from 'mssql';
import Pizza from '../models/pizza.js';
import Ingrediente from '../models/ingrediente.js';

class IngredienteService {
    getAll = async() => {
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Ingredientes');
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
                .query('SELECT * FROM Ingredientes WHERE Id = @pId');
                returnEntity = result.recordsets;
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    insert = async (ingrediente) => {
        let rowsAffected = 0;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre', sql.VarChar, pizza.Nombre)
                .query('INSERT INTO Ingredientes(Nombre) VALUES (@pNombre)');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    updateIngredientes = async (pizza) => {
        let rowsAffected = 0;
        console.log(pizza);
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre', sql.VarChar, pizza.Nombre)
                .input('pId', sql.Int, pizza.Id)
                .query('UPDATE Ingredientes SET Nombre = @pNombre WHERE Id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    deleteById = async (id) => {
        let rowsAffected = 0;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('DELETE FROM Ingredientes WHERE Id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default IngredienteService;
