let queryString = location.search;
let obj = new URLSearchParams(queryString)
let palabraBuscada = obj.get("search")
console.log(palabraBuscada);
fetch('https://dummyjson.com/recipes')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
    
        let result = document.querySelector(".result")
        
        result.addEventListener('#search', function(busqueda) {
            busqueda.preventDefault();
            if (palabraBuscada.value ) {
                result.innerText = "No hay coincidencias con la búsqueda"
            } else if (palabraBuscada.value) {
                result.innerText = 'resultados de busqueda para: ${}'
            }
        })
        
       
    })
    .then(function (error) {
        console.log(`El error es:` + error);
        
    });
