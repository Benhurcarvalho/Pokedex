const pokemonsHtml = document.getElementById('pokemonsList');
const btnMore = document.getElementById('btnMore');
const btnLess = document.getElementById('btnLess');
const limit = 18;
let offset = 0;

const convertpokemonListToHtml = (pokemon) => {
    return `
    <li class="pokemon ${pokemon.type}">
        <samp class="number">#${pokemon.number}</samp>
        <samp class="name">${pokemon.name}</samp>

        <div class="detail">
            <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')} 
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
</li>
    `

}

const loadMorePolemons = (offset, limit) => {
    pokeApi.getPokemons(offset, limit).then((pokemons = [])=> {
        const mewHTML = pokemons.map(convertpokemonListToHtml).join('')
        pokemonsHtml.innerHTML += mewHTML
    }) 
}

loadMorePolemons(offset, limit)

btnMore.addEventListener('click', () => {

    if( offset >= 36) {
        btnMore.setAttribute("disabled", "disabled")
        return alert('Você chegou ao limite de Pokemons!')

        // btnMore.parentElement.removeChild(btnMore)
    }

    offset+= limit
    console.log(offset)
    loadMorePolemons(offset, limit)
})
