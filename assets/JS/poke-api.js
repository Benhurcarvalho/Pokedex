

const pokeApi = {}


pokeApi.getPokemons = (limit = 10, offset = 0) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return  fetch(url)
                .then((response)=>  response.json())
                .then((jsonBody) => jsonBody.results)
                .catch((error) => console.error(`${error}
                Ops! Algo de errado aconteceu, verifique sua internet e tente novamente`))
                .finally(() => console.log('Requisição concluída-pokeApi'))
}

// pokeApi.getPokemons()
// console.log(pokeApi)