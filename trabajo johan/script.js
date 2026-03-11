function buscarPokemon(){

    const nombre = document.getElementById("nombrePokemon").value.toLowerCase()

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then(respuesta => respuesta.json())
    .then(data => {

        const resultado = document.getElementById("resultado")

        resultado.innerHTML = `
        <div class="card">
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}">
            <p><b>Altura:</b> ${data.height}</p>
            <p><b>Peso:</b> ${data.weight}</p>
        </div>
        `
    })

    .catch(error =>{
        document.getElementById("resultado").innerHTML =
        "<p>Pokémon no encontrado</p>"
    })
}
