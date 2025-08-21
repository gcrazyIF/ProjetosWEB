/* em java script de navegadores */
function calcularMedia(a,b) {
    return (a + b) / 2;
}

const media1 = calcularMedia(10, 20);
console.log(`A média é: ${media1}`);

/* para executar esses comandos sem a necessidade de um navegador, é necessário o nodejs, cujos comandos
são executados no terminal. Comecemos por "node [nome do arquivo]". Atente-se que para o nodejs executar
propriamente, o terminal deve estar presente na pasta onde o arquivo se encontra. Caso haja mais de um arquivo
js, o node executará somente o indicado a executar-se, porém irá reservar loaders para os outros arquivos.*/