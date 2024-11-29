const categoria = document.querySelector

fetch('https://dummyjson.com/recipes/tags')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
    const categoria = document.querySelector('.categoria')
    
    let categorias = '';

    for(let i = 0; i < data.length; i++){
        const categoria = data[i];
        categorias +=
    `
    <ol class="cat">
    <li> <a href="./categorias.html?tag=${categoria}">${categoria}</a></li>
    </ol>
        `
    }
    categoria.innerHTML = categorias;
})

.catch(function(error){
    console.log(error)
});