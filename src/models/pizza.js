class Pizza{
    Id;
    Nombre;
    LibreGluten;
    Importe;
    Descripcion;

    constructor(id = 0, nombre, libreGluten, importe, descripcion){
        this.Id = id;
        this.Nombre = nombre;
        this.LibreGluten = libreGluten;
        this.Importe = importe;
        this.Descripcion = descripcion;
    }
}

export default Pizza;