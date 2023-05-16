function home(){
    var functions = document.querySelectorAll('.function');
    functions.forEach((func) => {
        func.style = "display: inline-block";
    });
    document.getElementById('getAll').style = "display: inline";
    document.querySelector(".lista").innerHTML = '';
    document.getElementById('back').style = "display: none;"
    document.getElementById('idSelectorGet').style = "display: inline";
    document.getElementById('getById').style = "display: inline";
    document.getElementById('idSelectorDel').style = "display: inline";
}

function hide(){
    document.getElementById('getAll').style = "display: none";
    document.getElementById('idSelectorGet').style = "display: none";
    document.getElementById('getById').style = "display: none";
    var functions = document.querySelectorAll('.function');
    functions.forEach((func) => {
        func.style = "display: none";
    });
    document.getElementById('idSelectorDel').style = "display: none";
}

function getAll(){
    document.getElementById('back').style = "display: block;"
    hide();
    axios
    .get("http://localhost:912/API")
    .then((result) => {
        
      pizzas = result.data[0];
      pizzas.map((pizza) => {
        const { Id, Nombre, LibreGluten, Importe, Descripcion } = pizza;

        document.querySelector(".lista").innerHTML += `
            <li class="card col-lg-4 col-push-4 m-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${Nombre}</h5>
                    <p class="card-text"> Libre de Gluten: ${LibreGluten}, Importe: ${Importe}, Descripcion: ${Descripcion} </p>
                </div>
            </li>
        `;
      });
      
    })
    .catch((error) => {
      console.log('error');
    });

}

function getById(){
    document.getElementById('back').style = "display: block;";
    hide();

    const id = document.getElementById('idSelectorGet').value;
    
    axios
    .get(`http://localhost:912/getById/${id}`)
    .then((result) => {
      console.log(result.data);
      pizza = result.data;
      const { Id, Nombre, LibreGluten, Importe, Descripcion } = pizza;
      document.querySelector(".lista").innerHTML += `
            <center>
                <li class="card col-sm-4 col-sm-push-4 m-3" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${Nombre}</h5>
                        <p class="card-text"> Libre de Gluten: ${LibreGluten}, Importe: ${Importe}, Descripcion: ${Descripcion} </p>
                    </div>
                </li>
            </center>
        `;
      
    })
    .catch((error) => {
      console.log('error');
    });
}

function deleteId(){
    const id = document.getElementById('idSelectorDel').value;
    
    axios
    .delete(`http://localhost:912/delete/${id}`)
    .then((result) => {
        
      alert("Borrado con exito");
      
    })
    .catch((error) => {
      console.log('error');
    });
}

function insert(){
    const pizza = {
        nombre: document.getElementById('nombreInsert').value,
        libreGluten: document.getElementById('libreGlutenInsert').checked,
        importe: document.getElementById('importeInsert').value,
        descripcion: document.getElementById('descripcionInsert').value
    }

    axios
    .post(`http://localhost:912/insert?nombre=${pizza.nombre}&libregluten=${pizza.libreGluten}&importe=${pizza.importe}&descripcion=${pizza.descripcion}`)
    .then((result) => {
        
      alert("Insertado con exito");
      
    })
    .catch((error) => {
      console.log('error');
    });

}

function update(){

    let params = JSON.stringify({
        "Id": document.getElementById('idUpdate').value,
        "Nombre": document.getElementById('nombreUpdate').value,
        "LibreGluten": document.getElementById('libreGlutenUpdate').checked,
        "Importe": document.getElementById('importeUpdate').value,
        "Descripcion": document.getElementById('descripcionUpdate').value
    });

    const options = {
        method: 'PUT', 
        url: `http://localhost:912/update`,
        headers: {
            'content-type': 'application/json',
            'X-RapidApi-Key': 'your-rapidapi-key',
            'X-RapidApi-Host': 'microsoft-translator-text.p.rapidapi.com',
        },
        data: params
    }

    axios
    .request(options)
    .then((result) => {
        
      alert("Cambiado con exito");
      
    })
    .catch((error) => {
      console.log('error');
    });

}