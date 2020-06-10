const boton1 = document.getElementById('boton1');

boton1.addEventListener('click', function(){
    // Creacion de objeto XMLHttpRequest
    const xhr  = new XMLHttpRequest();
    // Abrir conexion 
    xhr.open('GET', 'empleado.json', true);

    // carga
    xhr.onload = function(){
        if(this.status === 200){
            const persona = JSON.parse(this.responseText);
            const htmlTemplate = `
                <ul>
                    <li>ID: ${persona.id}</li>
                    <li>Nombre: ${persona.nombre}</li>
                    <li>Empresa: ${persona.empresa}</li>
                    <li>Actividades: ${persona.trabajo}</li>
                </ul>
            `;
            document.getElementById('empleado').innerHTML = htmlTemplate;
        }
    }
    xhr.send();
});