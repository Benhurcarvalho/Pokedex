

const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => fetch(pokemon.url).then((response) => response.json())


pokeApi.getPokemons = (limit = 12, offset = 0) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return  fetch(url)
                .then((response)=>  response.json())
                .then((jsonBody) => jsonBody.results)
                .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
                .then((detailRequests) => Promise.all(detailRequests))
                .then((pokemonDetails) => pokemonDetails)

                .catch((error) => console.error(`${error}
                Ops! Algo de errado aconteceu, verifique sua internet e tente novamente`))
                .finally(() => console.log('Requisição concluída-pokeApi'))
}
