const pokemonsHtml = document.getElementById('pokemonsList')

const convertpokemonTypeToLi = (pokemonTypes) => {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

const convertpokemonListToHtml = (pokemon) => {
    return `
    <li class="pokemon">
        <samp class="number">#${pokemon.order}</samp>
        <samp class="name">${pokemon.name}</samp>

        <div class="detail">
            <ol class="types">
                    ${convertpokemonTypeToLi(pokemon.types).join('')}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
        </div>
</li>
    `
}

pokeApi.getPokemons().then((pokemons = [])=> pokemonsHtml.innerHTML += pokemons.map(convertpokemonListToHtml).join('')) 
