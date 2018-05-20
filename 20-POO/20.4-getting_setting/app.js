class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    getNome(){
        return this.nome;
    }

    getIdade(){
        return this.idade;
    }

    setNome(nome){
        this.nome = nome;
    }

    setIdade(idade){
        this.idade = idade;
    }
}

let pessoa = new Pessoa("Leonardo", 33);

console.log(pessoa);

console.log(pessoa.setIdade(50));
console.log(pessoa.getIdade());