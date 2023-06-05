class IngredienteXPizza{
    Id;
    IdPizza;
    IdIngrediente;
    Cantidad;
    IdUnidad;

    constructor(idPizza, idIngrediente, cantidad, idUnidad, id = 0){
        this.IdPizza = idPizza;
        this.IdIngrediente = idIngrediente;
        this.Cantidad = cantidad;
        this.IdUnidad = idUnidad;
        this.Id = id;
    }
}

export default IngredienteXPizza;