document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST);

function cargarTXT(){
    fetch('datos.txt')
        .then(function(res){
            return res.text();
        })
        .then(function(data){
            document.getElementById('resultado').innerHTML = data;
        })
        .catch(function(error){
            console.log(error)
        });
}

function cargarJSON(){
    fetch('empleados.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let html = '';
            data.forEach(function(empleado){
                html += `
                <li>${empleado.nombre} ${empleado.puesto} </li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error){
            console.log(error)
        });
}



