fetch('https://dummyjson.com/recipes')
    .then(function (response) {
        return response.jason()
    })
    .then(function (data) {
        console.log(data);
        
    })
    .then(function (error) {
        console.log(`El error es:` + error);
        
    })