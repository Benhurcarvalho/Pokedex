import React from 'react'

export default function CartPokemon({pokemonsLinst}) {
    
  return (
    <div> { (pokemonsLinst) && 
       ( <div class="detail">
            <ol class="types">
            {pokemonsLinst.map((pokemon) => 
            <li>{pokemon.name}</li>)} 
            </ol>
            {/* <img src={} alt={}/> */}
        </div>)
    }
        {/* <p>{pokemons[0].name}</p> */}
        {/* <li class="cart-pokemon">
            <samp class="number">{}</samp>
            <samp class="name">{}</samp>

            <div class="detail">
                <ol class="types">
                {pokemon.types.map((type) => <li class="type ${type}">${type}</li>).join('')} 
                </ol>
                <img src="${}" alt="${}"/>
            </div>
        </li>  */}
    </div>
  )
}
