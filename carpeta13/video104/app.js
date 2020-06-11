const cargarPost = document.querySelector('#cargar').addEventListener('click', cargarAPI);

function cargarAPI() {
    // Creacion de objeto XMLHttpRequest
    const xhr  = new XMLHttpRequest();
    // Abrir conexion 
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    // carga
    xhr.onload = function(){
        if(this.status === 200){
            const posts = JSON.parse(this.responseText);
            let contenido = '';
            posts.forEach(function(post) {
                contenido += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            })
            document.getElementById('listado').innerHTML = contenido;
        }
    }

    xhr.send();
}