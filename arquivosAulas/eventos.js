//MANIPULANDO HTML COM JAVA SCRIPT

const paragrafo = document.getElementById("mensagem"); //chama um objeto pelo seu id (atribui o valor em html do objeto chamado à variável)
const botao = document.getElementById("botao");
const caixa = document.getElementById("caixa-colorida");

//console.log(paragrafo);
//console.log(botao);

/*botao.addEventListener("click", function(){ //condiciona a ação de uma função quando a condição for verdadeira para a variavel escolhida
    paragrafo.textContent = "Você clicou no botão!" //altera o conteúdo da variável escolhida
    paragrafo.classList.toggle("ativo"); // altera o estilo do componente por meio da invocação da classe em css
    botao.disabled = true; //desativa o botão
    caixa.style.backgroundColor = "#3498db" // muda a cor da caixa
}) */

function clickBotao(){
    paragrafo.textContent = "Você clicou no botão!"
    paragrafo.classList.toggle("ativo");
    botao.disabled = true;
    caixa.style.backgroundColor = "#3498db"
}