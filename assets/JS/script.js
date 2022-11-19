const pokemonsHtml = document.getElementById('pokemonsList')

const convertpokemonListToHtml = (pokemon) => {
    return `
    <li class="pokemon ${pokemon.type}">
        <samp class="number">#${pokemon.number}</samp>
        <samp class="name">${pokemon.name}</samp>

        <div class="detail">
            <ol class="types">
            ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')} 
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
</li>
    `

}



pokeApi.getPokemons().then((pokemons = [])=> pokemonsHtml.innerHTML += pokemons.map(convertpokemonListToHtml).join('')) 
