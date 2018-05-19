const POKEMON = {
    nome: "Pikachu",
    cor: "amarelo",
    evolucao:"Raichu"
};

// Com interpolação
let descricao = `Meu nome é  ${POKEMON.nome}, eu sou da cor ${POKEMON.cor} , minha evolução é ${POKEMON.evolucao}`

// Sem interpolação
/*
    var descricao = "Meu nome é "+ POKEMON.nome+"
                    , eu sou da cor "+POKEMON.cor+"
                    , minha evolução é "+POKEMON.evolucao
*/

console.log(descricao);