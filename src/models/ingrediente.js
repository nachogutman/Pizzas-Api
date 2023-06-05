class Ingrediente{
    Id;
    Nombre;

    constructor(nombre, id = 0){
        this.Nombre = nombre;
        this.Id = id;
    }
}

export default Ingrediente;