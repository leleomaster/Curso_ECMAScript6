
let mapa = new Map();

mapa.set("nome","Pikachu");
mapa.set("color","amarelo");
mapa.set("tipo","Elétrico");

console.log(mapa);
console.log(mapa.get("nome"));
console.log(mapa.has("nome"));

console.log(mapa.delete("nome"));
console.log(mapa.get("nome"));
console.log(mapa);
