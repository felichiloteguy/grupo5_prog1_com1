let queryString= location.search;
let obj= new URLSearchParams(queryString)
console.log(obj);
let id= obj.get("id");
console.log(id);

fetch(`https://dummyjson.com/recipes/${id}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let tituloR= document.querySelector(".tituloR");
        tituloR.innerHTML+= `${data.name}`
        let image= document.querySelector(".imageR");
        image.src = `${data.image}`
        let caracteristicas= document.querySelector(".caracteristicas");
        caracteristicas.innerHTML = `Puntuación:${data.rating}, Origen: ${data.cuisine}, Porciones: ${data.servings}`
        let ingredientes= document.querySelector(".ingredientes");
        ingredientes.innerHTML = `${data.ingredients}`
        let pasos= document.querySelector(".pasos");
        pasos.innerHTML = `${data.instructions}`

        const categoriasR= document.querySelector(".categorias");
        categorias = "";
         for (let index = 0; index < data.tags.length; index++) {
        let categoria= data.tags[index]
        categorias+= ` ${categoria} `
         };
    
         categoriasR.innerHTML = categorias 

    })
    .then(function (error) {
        console.log(`El error es:` + error);
        
    })