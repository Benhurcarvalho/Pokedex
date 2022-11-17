const pokemonsHtml = document.getElementById('pokemonsList')
const offset = 0;
const limit = 10;
const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"

const convertpokemonListToHtml = (pokemon) => {
    return `
    <li class="pokemon">
        <samp class="number">TESTE</samp>
        <samp class="name">${pokemon.name}</samp>

        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">paison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
        </div>
</li>
    `
}

// pokemonsHtml.innerHTML += `
// <li class="pokemon">
// <samp class="number">TESTE</samp>
// <samp class="name">Bulbasaur</samp>

// <div class="detail">
//     <ol class="types">
//         <li class="type">grass</li>
//         <li class="type">paison</li>
//     </ol>
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Bulbasaur">
// </div>
// </li>`

fetch(url)
    .then((response)=>  response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList)=> {

        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            pokemonsHtml.innerHTML += (convertpokemonListToHtml(pokemon))        
        }

    })



    
    .catch((error) => console.log(error))
    .finally(() => console.log('Requisição concluída'))