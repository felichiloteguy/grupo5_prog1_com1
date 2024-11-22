let queryString = location.search;
let obj = new URLSearchParams(queryString);
queryStringObj.get('search');

fetch('https://dummyjson.com/recipes')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let result = document.querySelector(".result");

        if (!palabraBuscada) {
            result.innerText = "No se ingresó ninguna búsqueda.";
            return;
        }

        if (!data.recipes || data.recipes.length === 0) {
            result.innerText = "No hay recetas disponibles.";
        } else {
            let resultados = [];
            for (let i = 0; i < data.recipes.length; i++) {
                let recipe = data.recipes[i];
                
                if (recipe.name.indexOf(palabraBuscada) !== -1) {
                    resultados.push(recipe);
                }
            }

            if (resultados.length === 0) {
                result.innerText = `No hay coincidencias con la búsqueda: "${palabraBuscada}"`;
            } else {
                result.innerHTML = `<h2>Resultados de búsqueda para: "${palabraBuscada}"</h2>`;
                for (let i = 0; i < resultados.length; i++) {
                    let recipe = resultados[i];
                    result.innerHTML += `
                        <div class="result-item">
                            <img src="${recipe.image}" alt="${recipe.name}" />
                            <h3>${recipe.name}</h3>
                            <a href="./receta.html?id=${recipe.id}">Ver receta</a>
                        </div>
                    `;
                }
            }
        }
    })
    .catch(function (error) {
        console.log(`El error es: ${error}`);
    });


