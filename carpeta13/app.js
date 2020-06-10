document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos(){
    // Creacion de objeto XMLHttpRequest
    const xhr  = new XMLHttpRequest();
    // Abrir conexion 
    xhr.open('GET', 'datos.txt', true);

    // carga
    xhr.onreadystatechange = function(){
        console.log(`Estado${this.readyState}`)

        if(this.readyState === 4 && this.status === 200){
            // console.log(this.responseText);

        }
    }
    // ready status
    /*
    0 no inicialiado 
    1 conexion 
    2 recibido 
    3 procesado 
    4 respuesta 
    */

    // enviar request
    xhr.send();
}

