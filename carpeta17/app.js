let aprendiendo;
aprendiendo = function(){
    console.log('Aprendiendo JavaScript');
}

aprendiendo = () =>  'Aprendiendo JavaScript';

//retornar valor 
aprendiendo = () => ({aprendiendo: 'Aprendiendo JavaScript'});


aprendiendo = tecno => console.log(`Aprendiendo ${tecno}`);
aprendiendo = (tecno, hola) => console.log(`Aprendiendo ${tecno} ${hola}`);


const productos = ['Disco', 'Camisa', 'Guitarra'];
/*
const letrasProductos = productos.map(function(producto){
    return producto.length;
});
console.log(letrasProductos);

const letrasProductos = productos.map(producto=> {
    return producto.length;
});
const letrasProductos = productos.map(producto=> producto.length);
console.log(letrasProductos);
productos.forEach(producto=>console.log(producto));
*/

