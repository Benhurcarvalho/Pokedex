const pokeApi = {}

function convertpokeApiDetailToPokemon(pokemonDetails) {
    const pokemon = new Pokemon()
    pokemon.number = pokemonDetails.id;
    pokemon.name = pokemonDetails.name;

    const types = pokemonDetails.types.map((e) => e.type.name)
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;
    pokemon.photo = pokemonDetails.sprites.other.dream_world.front_default;

    return pokemon
} 

pokeApi.getPokemonDetail = (pokemon) => fetch(pokemon.url).then((response) => response.json()).then(convertpokeApiDetailToPokemon)


pokeApi.getPokemons = (offset, limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return  fetch(url)
                .then((response)=>  response.json())
                .then((jsonBody) => jsonBody.results)
                .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
                .then((detailRequests) => Promise.all(detailRequests))
                .then((pokemonDetails) => pokemonDetails)
}
