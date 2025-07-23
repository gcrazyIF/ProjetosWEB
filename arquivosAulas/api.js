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

const search = document.getElementById("search-button");
async function getPokemon(name){
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if(!resposta.ok){
            throw new Error('Erro ao buscar dados!');
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
    } catch (error) {
        console.error('Erro: ',error.message);
    }
}

search.addEventListener("sumbit", function (event){
    event.preventDefault();

    const pokePesquisa = pokeInput.value.trim();

    getPokemon(pokeInput);
});