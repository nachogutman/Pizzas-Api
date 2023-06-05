import config from '../../dbconfig.js';
import sql from 'mssql';
import Pizza from '../models/pizza.js';
import Ingrediente from '../models/ingrediente.js';

class UnidadService {
    getAll = async () => {
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Unidades');
            returnEntity = result.recordsets;
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    getById = async (id) => {
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT * FROM Unidades WHERE id = @pId');
            returnEntity = result.recordsets[0][0]
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
}

export default UnidadService;
