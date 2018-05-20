
const contas = { cliente: "leonardo" };
const alimentos = { nome: "renato", quantidade: 2 };
const bebidas = { tipo: "gasosa", sabor: "laranja" };

Object.assign(contas, alimentos, bebidas);

console.log(contas);
console.log(contas.nome);
console.log(contas.cliente);

console.log(alimentos);
console.log(bebidas);

