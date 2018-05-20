let Pessoa = {
    nome: "Leonardo",
    cpf: "333.444.666-99",
    cep: "02244-111"
}

let linguagens = new Set();

linguagens.add("php");
linguagens.add("java");
linguagens.add("c#");
linguagens.add("c#");
linguagens.add(Pessoa);

console.log(linguagens);

console.log(` Tem php no Conjunto Set()? ${linguagens.has("php")} `);

console.log(` Tem html no Conjunto Set()? ${linguagens.has("html")} `);

console.log(linguagens.entries());
console.log(linguagens.delete("php"));

// Expressão lambda, parecida com a do C#
linguagens.forEach(
    (linguagem) => {
        console.log(linguagem)
        if(typeof(linguagem) === "object"){
            console.log(linguagem.nome)
            console.log(linguagem.cpf)
            console.log(linguagem.cep)
        }
    }
);

console.log(linguagens.size);
