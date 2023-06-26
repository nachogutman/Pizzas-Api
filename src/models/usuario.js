class Usuario{
    Id;
    Apellido;
    Nombre;
    UserName;
    Password;
    Token;

    constructor(nombre, apellido, username, password, token, id = 0){
        this.Nombre = nombre;
        this.Apellido = apellido;
        this.UserName = username;
        this.Password = password;
        this.Token = token;
        this.Id = id;
    }
}

export default Usuario;