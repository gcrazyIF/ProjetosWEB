class Livro {
    titulo: string;
    autor: string;
    editora: string;
    ano: number;
    ibsn: string;
    preco: number;

    exibirDados(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Editora: ${this.editora}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`IBSN: ${this.ibsn}`);
        console.log(`Preço: R$${this.preco}`);
        console.log('---------------------------');
    }

    constructor(titulo: string, autor: string, editora: string, ano: number, ibsn: string, preco: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.ano = ano;
        this.ibsn = ibsn;
        this.preco = preco;
    }
}

class LivroFisico extends Livro {
    estoque: number;

    constructor(titulo: string, autor: string, editora: string, ano: number, ibsn: string, preco: number, estoque: number) {
        super(titulo, autor, editora, ano, ibsn, preco);
        this.estoque = estoque;
    }

    getEstoque(): number {
        return this.estoque;
    }
}

class Ebook extends Livro {
    tamanhoArquivo: number;

    constructor(titulo: string, autor: string, editora: string, ano: number, ibsn: string, preco: number, tamanhoArquivo: number) {
        super(titulo, autor, editora, ano, ibsn, preco);
        this.tamanhoArquivo = tamanhoArquivo;
    }
}

export {Livro, LivroFisico, Ebook};