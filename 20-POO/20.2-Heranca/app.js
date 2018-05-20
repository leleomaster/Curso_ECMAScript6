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

class Professor extends Pessoa{
    constructor(nome, idade, codigo){
        super(nome,idade);
        this.codigo = codigo;
    }

    getCodigo(){
        return this.codigo;
    }
}

let professor = new Professor("Tio bob","58", 666);

console.log(professor);
console.log(professor.getNome());

console.log(professor.getCodigo());

