document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);
// llamar e imprimir 
function cargarNombres(e) {
    e.preventDefault();
    
    const apikey = '53ae89eb5f3cd54814a53cc2d9085fc4';
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;

    let url = '';
    url +=`http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${origenSeleccionado}&limit=${cantidad}&api_key=${apikey}&format=json`;
    console.log(url);
    
    const xhr  = new XMLHttpRequest();
    // Abrir conexion 
    xhr.open('GET', url, true);

    // carga
    xhr.onload = function(){
        if(this.status === 200){
            const artistas = JSON.parse(this.responseText);
            const nombres = artistas.topartists.artist;
            let htmlNombres = '<ul class="lista">';
            
            nombres.forEach(function(nombre) {
                htmlNombres += `
                <li>${nombre.name}</li>
            `;
            })
            htmlNombres += '</ul>'
            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    }

    xhr.send();
}