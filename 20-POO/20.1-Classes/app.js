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

let pessoa = new Pessoa("leonardo campos", "33");

console.log(pessoa);

pessoa.setIdade(55);
pessoa.setNome("renato");
console.log(pessoa);

pessoa.setIdade(30);
pessoa.setNome("priscila");
console.log(pessoa);


