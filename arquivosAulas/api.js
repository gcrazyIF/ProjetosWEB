/*fetch('https://pokeapi.co/api/v2/pokemon/sylveon')
    .then(resposta => {
        if(!resposta.ok){
            throw new Error('Erro ao buscar dados!');
        }
        return resposta.json();
    })
    
    .then(dados => {
        console.log("Dados do Pokemon");
        console.log("Nome: ",dados.name);
        console.log("Altura: ",dados.height);
        console.log("Peso:",dados.weight);
        console.log("-- Habilidades --")
        for(let i = 0; i<dados.abilities.length; i++){
            console.log(i+1+" |",dados.abilities[i].ability.name);
        }
    })
*/

const search = document.getElementById('search-button');
const pokeInput = document.getElementById('pokemon-input');
const pokemonCard = document.getElementById('pokemon-card-container')
async function getPokemon(pokemon){
    try {
        const pokemonNameOrId = pokemon.toLowerCase().trim();
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);
        if(!resposta.ok){
            throw new Error(`Pokémon "${pokemonNameOrId}" não encontrado!`);
        }
        const dados = await resposta.json();

        console.log("-- Dados do Pokemon --");
        console.log("Nome: ",dados.name);
        console.log("Altura(m): ", dados.height/10);
        console.log("Peso(kg): ",dados.weight/10);
        console.log("Habilidades");
        for(let i = 0; i<dados.abilities.length; i++){
            console.log(i+1+"|",dados.abilities[i].ability.name);
        }
        renderPokemonData(dados);
    } catch (error) {
        console.error('Erro: ',error.message);
    }
}

function renderPokemonData(pokemonData){
    
    const types = pokemonData.types.map(typeInfo => typeInfo.type.name);
    const typesNames = types.join(', ');

    //toFixed define que o valor decimal tenha apenas uma casa decimal
    const cardPokemon = `
    <div class="pokemon-card">
        <h2>${pokemonData.name}</h2>
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}" class="pokemon-image">
        <ul class="info-list">    
            <li><strong>ID:</strong> <span>${pokemonData.id}</span> </li>
            <li><strong>Altura:</strong> <span>${(pokemonData.height/10).toFixed(1)}m</span> </li>
            <li><strong>Peso:</strong> <span>${(pokemonData.weight/10).toFixed(1)}kg</span> </li>
            <li><strong>Tipo:</strong> <span>${typesNames}</span> </li>
        </ul>
    </div>
    `

    pokemonCard.innerHTML = cardPokemon;
}

search.addEventListener('click', function(){
    const pokemonNameOrId = pokeInput.value.trim();

    if(pokemonNameOrId){
        getPokemon(pokemonNameOrId);
    }
})