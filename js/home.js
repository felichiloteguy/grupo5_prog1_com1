let inicio= 0
const suma= 10
function cargarRecetas() {
fetch('https://dummyjson.com/recipes')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
    
        const menuRecetas= document.querySelector(".cuerpo");
        
        let recetas= "";
        for (let i = inicio; i < inicio + suma && i < data.recipes.length ; i++) {
            const receta= data.recipes[i];
            recetas +=`
            <article class="recetas">
                 <img class= "image" src= "${receta.image}" alt="${receta.name}">
                  <h1><a class= "titulo" href="./receta.html?id=${receta.id}"> ${receta.name}</a></h1>
                  <p> Duración: ${receta.prepTimeMinutes} minutos</p>
                  <p> Dificultad:  ${receta.difficulty}</p>
            </article>
            `;
               
        }
        menuRecetas.innerHTML += recetas; 
        inicio += suma
       
    })
    .then(function (error) {
        console.log(`El error es:` + error);
        
    });
}
document.querySelector("#cargarMas").addEventListener("click", cargarRecetas)
cargarRecetas();