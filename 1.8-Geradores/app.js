function* meuGerador(){
    var index = 0;
    while(index < 3){
        yield index ++;
    }
}

let gen = meuGerador();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* meuGerador2(){
    var index = 0;
    while(index < 3){
        yield index ++;
    }
}


let gen2 = meuGerador2();

console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);

