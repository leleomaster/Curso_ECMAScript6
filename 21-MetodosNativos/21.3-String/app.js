let mensagem = "Olá mundo";

console.log(mensagem.repeat(3));

console.log(mensagem.startsWith("Olá"));

console.log(mensagem.startsWith("Olá",2));

console.log(mensagem.startsWith("Olá",10));

console.log(mensagem.endsWith("mundo"));

console.log(mensagem.endsWith("Olá",3));

console.log(mensagem.endsWith("lá",3)); // 3 tamanho da string

console.log(mensagem.includes("mundo"));

console.log(mensagem.includes("mundos"));

console.log(mensagem.includes("mundo",4));// 4 = a partir do número 4 verifique se tem mundo
