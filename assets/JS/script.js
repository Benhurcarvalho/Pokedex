const pokemonsHtml = document.getElementById('pokemonsList')

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

pokeApi.getPokemons().then((pokemons = [])=> pokemonsHtml.innerHTML += pokemons.map(convertpokemonListToHtml).join('')) 
