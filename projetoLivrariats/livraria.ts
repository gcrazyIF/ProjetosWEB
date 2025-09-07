import * as livro from "./livro.ts";

interface ILivraria {
    nome: string;
    endereco: string;
    livros: Array<Array<livro.Livro>>;

    exibirLivros(): void;
    adicionarLivroFisico(): void;
    adicionarEbook(): void;
    removerLivroFisico(ibsn: string): void;
    removerEbook(ibsn: string): void;
    venderLivroFisico(ibsn: string): void;
}

class Livraria implements ILivraria {
    nome: string;
    endereco: string;
    livros: livro.Livro[][];

    constructor(nome: string, endereco: string, livros: livro.Livro[][]) {
        this.nome = "Livraria Almeida";
        this.endereco = "Rua das Flores, 123 - Centro";
        this.livros = [[], []];
    }
    
    exibirLivros(): void {
        for(let i = 0; i < this.livros.length; i++){
            if(i == 0) {
                console.log("Livros Físicos:");
            }
            for(let j = 0; j < this.livros[i].length; j++){
                if(i == 2){
                    console.log("E-books: ");
                }
                this.livros[i][j].exibirDados();
            }
        }
    }
    adicionarLivroFisico(): void {
        const livroFisicoIn: livro.Livro = new livro.LivroFisico("Título Genérico", "Autor Genérico", "Editora Genérica", 2024, "000-0000000000", 32.70, 10);
        this.livros[0].push(livroFisicoIn);
        console.log(`Livro físico de título: ${livroFisicoIn.titulo} adicionado com sucesso.`);
        console.log('---------------------------');
        console.log('');
    }
    adicionarEbook(): void {
        const ebookIneerente: livro.Livro = new livro.Ebook("Título Genérico", "Autor Genérico", "Editora Genérica", 2024, "000-0000000000", 32.70, 10);
        this.livros[1].push(ebookIneerente);
        console.log(`E-book de título: ${ebookIneerente.titulo} adicionado com sucesso.`);
        console.log('---------------------------');
        console.log('');
    }
    removerLivroFisico(ibsn: string): void {
        for(let i = 0; i < this.livros[0].length; i++){
            if(this.livros[0][i].ibsn === ibsn){
                this.livros[0].splice(i, 1);
                console.log(`O livro físico com IBSN ${ibsn} foi removido.`);
                console.log('---------------------------');
                console.log('');
                return;
            }
        }
    }
    removerEbook(ibsn: string): void {
        for(let i = 0; i < this.livros[1].length; i++){
            if(this.livros[1][i].ibsn === ibsn){
                this.livros[1].splice(i, 1);
                console.log(`E-book com IBSN ${ibsn} foi removido.`);
                console.log('---------------------------');
                console.log('');
                return;
            }
        }
    }
    venderLivroFisico(ibsn: string): void {
        for(let i = 0; i < this.livros[0].length; i++){
            if(this.livros[0][i].ibsn === ibsn){
                this.livros[0] instanceof livro.LivroFisico;
                (this.livros[0][i] as livro.LivroFisico).estoque -= 1;
                console.log(`O livro físico com IBSN ${ibsn} foi vendido.`);
                console.log('---------------------------');
                console.log('');
                return;
            }
        }
    }
    atualizarEstoque(): void {
        for(let i = 0; i< this.livros[0].length; i++){
            this.livros[0] instanceof livro.LivroFisico;
            console.log(`Estoque de ${this.livros[0][i].titulo}: ${(this.livros[0][i] as livro.LivroFisico).estoque}`);
            console.log('---------------------------');
            console.log('');
        }
    }
}

const livrariaAlmeida = new Livraria("Livraria Almeida", "Rua das Flores, 123 - Centro", [[], []]);
const livroFisicoNovo: livro.Livro = new livro.LivroFisico("Ainda Estou Aqui", "Marcelo Rubens Paiva", "Alfaguara", 2015, "978-8579624162", 43.90, 10);
const ebookNovo: livro.Livro = new livro.Ebook("Rainha das Lágrimas", "Lisa Walkman", "Companhia das Letras", 2020, "XXX-ZZZZZZZZZZ", 31.30, 6);

livrariaAlmeida.livros[0].push(livroFisicoNovo);
livrariaAlmeida.livros[1].push(ebookNovo);

livrariaAlmeida.exibirLivros();

livrariaAlmeida.adicionarLivroFisico();
livrariaAlmeida.adicionarEbook();

livrariaAlmeida.exibirLivros();
livrariaAlmeida.atualizarEstoque();

livrariaAlmeida.removerLivroFisico("000-0000000000");
livrariaAlmeida.removerEbook("000-0000000000");
livrariaAlmeida.venderLivroFisico("978-8579624162");
livrariaAlmeida.atualizarEstoque();

livrariaAlmeida.exibirLivros();