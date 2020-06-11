// Callback en foreach

const ciudades = ['Londres', 'México', 'Puebla', 'Apizaco'];
// Inline callback
/*ciudades.forEach(function (ciudad) {
    console.log(ciudad);
})

//funcion definidad
function callback(pais) {
    console.log(ciudades)
}
ciudades.forEach(callback);*/

function nuevoCiudad(ciudad, callback) {
    setTimeout(function () {
        ciudades.push(ciudad);
        callback();
    }, 2000);
}

function mostrarCiudades() {
    setTimeout(function () {
        let html = '';
        ciudades.forEach(function (pais) {
            html += `<li>${pais}</li>`;
        });
        document.getElementById('app').innerHTML = html;
    }, 1000);
}
//agredar nueva ciudad
nuevoCiudad('Paris', mostrarCiudades);

mostrarCiudades();

