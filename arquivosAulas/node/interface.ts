interface IUser {
    id: number;
    name: string;
    password: string;
    email: string;
}

const usuario: IUser = {
    id: 1,
    name: "João",
    password: "837382",
    email: "oi@gmail.com",
}

console.log(usuario);

// esse tipo de criação de objetos é estritamente tipada, limitando os recursos e a flexibilidade;
// assim, há uma melhor maneira de criar objetos: usando classes.

interface ICarro {
    marca: string;
    modelo: string;
    ano: number;
    velocidade: number;
    
    exibirDados(): void;
    acelerar(velocidade: number): void;
    frear(): void;
}

class CarroAGas implements ICarro {
    marca: string;
    modelo: string;
    ano: number;
    velocidade: number;
    /*
    Implementando classes, é possível definir um atributo exclusivo para a classe em questão;
    */
   private nivelGas: number;
   private litros: number;

    constructor(marca: string, modelo: string, ano: number, velocidade: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = velocidade;
        this.nivelGas = 100;
        this.litros = 0;
    }
    
    // método opcional, que será usado pelo carro a gasolina;
    encherTanque(nivelGas: number, litros: number): void {
        this.nivelGas += litros;
        console.log(`O tanque foi abastecido com ${litros} litros.`);
    }

    exibirDados(): void {
        /*
        Conteúdo padrão de funções de classes implementadas a partir de interfaces;
        throw new Error("Method not implemented.");
        */
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Velocidade: ${this.velocidade}km/h`);
        console.log(`Nível de gasolina: ${this.nivelGas}%`);
    }

    acelerar(velocidade: number): void {
        this.velocidade += velocidade;
        console.log(`Acelerando a ${velocidade}km/h`);
    }

    frear(): void {
        if(this.velocidade = 0) {
            console.log(`O carro já está parado.`);
            return;
        }
        else {
            this.velocidade = 0;
            console.log(`O carro parou.`);
        }
    }
}

const carroaGas1 = new CarroAGas("Ford", "Ka", 2020, 0);
carroaGas1.exibirDados();
carroaGas1.acelerar(60);
carroaGas1.frear();
carroaGas1.encherTanque(this.nivelGas, 20);