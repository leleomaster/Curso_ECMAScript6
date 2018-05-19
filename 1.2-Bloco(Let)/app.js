function BlocoNormal(){
    var x = 100;

    if(true){
        var x = 50;
        console.log(x);// 50
    }
    console.log(x);// 50 :(
}

function BlocoLet(){
    var x = 100;

    if(true){
        let x = 50; // esta variável é do bloco if.
        console.log(x);// 50
    }
    console.log(x);// 100  :)
}

console.log("========== VAR ==========");
BlocoNormal();

console.log("========== LET ==========");
BlocoLet()