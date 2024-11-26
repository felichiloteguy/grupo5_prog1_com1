let queryString = window.location.search;
let parametro = new URLSearchParams(queryString);
let category = parametro.get('tag');


let categoriaItem = document.querySelector(".categoria-item")
categoriaItem.innertext = `categoria:${category}`


fetch ('https://dummyjson.com/recipes')
.then(function(response){
    return response.json();
})


    .then(function(data){
    const receta = data.recipes;
    const recetas = document.querySelector(".categorias-item")
    let recipe = "";
       
    for(let index = 0; index< receta.length; index++) {
        const recetario = receta[index];


            if (recetario.tags){
                for(let i =0; i < recetario.tags.length; i++){
                    if (recetario.tags[i]=== category){
                        recetas.innerHTML +=
                        `
            <ol>
                <li>
                    <h2 class="categoria-nombre">${recetario.name}</h2>
                    <img class="categoria-img" src="${recetario.image}" alt="${recetario.name


                    }">
                    <p class="categoria-dificultad">Dificultad: ${recetario.difficulty}</p>
                    <a href=".receta.html?id=${recetario.i}" class="categoria-receta">Ver receta</a>
                </li>
            </ol>
                        `
                    }
                }
            }
    }
    })