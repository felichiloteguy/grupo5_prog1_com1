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
    `<ol>
    <li> <a href="./categoria.html?tag=${categoria}">${categoria}</a></li>
    </ol>
        `
    }
    categoria.innerHTML = categorias;
})

.catch(function(error){
    console.log(error)
});