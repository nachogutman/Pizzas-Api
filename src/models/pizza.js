class Pizza{
    Id;
    Nombre;
    LibreGluten;
    Importe;
    Descripcion;

    constructor(nombre, libreGluten, importe, descripcion, id = 0){
        this.Nombre = nombre;
        this.LibreGluten = libreGluten;
        this.Importe = importe;
        this.Descripcion = descripcion;
        this.Id = id;
    }
}

export default Pizza;