import config from '../../dbconfig.js';
import sql from 'mssql';
import Escribir from '../modules/log-helper.js';
import { randomUUID } from 'crypto';


class UsuarioService {

    login = async (username, password) => {
        let returnEntity = null;
        returnEntity = await this.getByUserName(username, password);
        if (returnEntity != null) {
            await this.refreshToken(returnEntity.Id);
        }

        return await this.getByUserName(username, password);

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

    refreshToken = async (id) => {
        let rowsAffected = 0;
        let randomToken = randomUUID();

        const date = new Date();
        var expiracion = new Date(date.getTime() + 15 * 60000);

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .input('pToken', sql.VarChar, randomToken)
                .input('pExpiracion', sql.DateTime, expiracion)
                .query('UPDATE usuarios SET Token=@pToken, TokenExpirationDate=@pExpiracion WHERE Id=@pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return randomToken;
    }

    getByToken = async (token) => {
        let returnEntity = null;

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pToken', sql.VarChar, token)
                .query('SELECT * FROM Usuarios WHERE Token=@pToken');
            returnEntity = result.recordsets[0][0]
        } catch (error) {
            console.log( error);
        }
        return returnEntity;
    }
}

export default UsuarioService;
