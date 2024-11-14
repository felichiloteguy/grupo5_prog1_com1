fetch('https://dummyjson.com/recipes')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
    
        const menuRecetas= document.querySelector(".cuerpo");
        
        let recetas= "";
        
        for (let i = 0; i < data.recipes.length; i++) {
            const receta= data.recipes[i];
            recetas +=`
            <article class="recetas">
                 <img class= "image" src= "${receta.image}" alt="${receta.name}">
                  <h1><a class= "titulo" href="./detalle.html?id=${receta.id}"> ${receta.name}</a></h1>
                  <p> Duración: ${receta.prepTimeMinutes} minutos</p>
                  <p> Puntuación:  ${receta.rating}</p>
            </article>
            `;
               
        }
        
        
        menuRecetas.innerHTML = recetas; 
        
    })
    .then(function (error) {
        console.log(`El error es:` + error);
        
    })