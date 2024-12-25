// Classe base (abstração) para Animal
class Animal {
    constructor(nome) {
        this.nome = nome; // Define o nome do animal
    }

    emitirSom() {
        return `${this.nome} está fazendo um som!`;
    }

    dizTipo() {
        return `Tipo: ${this.tipo}`;
    }

    mostrarInformacoes() {
        console.log(`Nome: ${this.nome}`);
        console.log(this.dizTipo());
        console.log(this.emitirSom());
    }
}

// Classe derivada para Cachorro
class Cachorro extends Animal {
    constructor(nome, idade) {
        super(nome); // Chama o construtor da classe Animal
        this.tipo = "Cachorro";
        this.idade = idade; // Define a idade do cachorro
    }

    dizIdade() {
        return `Idade: ${this.idade} anos.`;
    }

    mostrarInformacoes() {
        super.mostrarInformacoes();
        console.log(this.dizIdade());
        console.log("------------------------"); // Linha separadora
    }
}

// Classe derivada para Gato
class Gato extends Animal {
    constructor(nome, idade) {
        super(nome); // Chama o construtor da classe Animal
        this.tipo = "Gato";
        this.idade = idade; // Define a idade do gato
    }

    dizIdade() {
        return `Idade: ${this.idade} anos.`;
    }

    mostrarInformacoes() {
        super.mostrarInformacoes();
        console.log(this.dizIdade());
        console.log("------------------------"); // Linha separadora
    }
}

// Criando instâncias de objetos
const cachorro1 = new Cachorro("Rex", 5);
const gato1 = new Gato("Mimi", 3);
const cachorro2 = new Cachorro("Bolt", 7);

// Exibindo informações dos animais
cachorro1.mostrarInformacoes();
gato1.mostrarInformacoes();
cachorro2.mostrarInformacoes();
