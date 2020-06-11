// Callback en foreach
/*
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
/*
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
*/
// Promises
/*
const espera = new Promise(function (resolve, reject) {
   setTimeout(function(){
        resolve('se ejecuto');
   }, 5000);
});
espera.then(function(mensaje){
    console.log(mensaje)
})
*/

const aplicarDescuento = new Promise(function(resolve, reject){
    const desc = false;
    if(desc){
        resolve('Descuento Aplicado');
    }else{
        reject('No se puede aplicar el descuento');
    }
});

aplicarDescuento.then(function(msj){
    console.log(msj);
}).catch(function(error){
    console.log(error);
})