import config from '../../dbconfig.js';
import sql from 'mssql';
import Escribir from '../modules/log-helper.js';

class UsuarioService {

    login = async (username, password) => {
        let returnEntity = null;
        returnEntity = this.getByUserName(username, password);
        if(returnEntity != null){
            console.log(returnEntity)
        }
    }

    getByUserName = async (username, password) => {
        let returnEntity = null;

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pUserName', sql.VarChar, username)
                .input('pPassword', sql.VarChar, password)
                .query('SELECT * FROM Usuarios WHERE UserName=@pUserName and Password=@pPassword');
            returnEntity = result.recordsets[0][0]
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
}

export default UsuarioService;
