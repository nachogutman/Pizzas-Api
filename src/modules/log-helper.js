import fs from 'fs';

export default function Escribir(error){

    const content = String(error);

    fs.appendFile('./errors/error.txt', "    " + content + " \n", err => {
        if(err){
            console.log(err);
        }
    })
}