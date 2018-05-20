# Curso_ECMAScript6
Aprendendo as nova funcionalidades do Javascript

1.1 - Constantes
    Constantes são variáveis que quando declaradas e atribuidas um valor, não poderá mais mudar o seu valor.

1.2 - Bloco com let
    Quando estamos dentro de uma função, por exemplo, e queremos declarar uma variável que já existe, podemos usar o left em vez de var, para
    declarar a variável com o mesmo nome da já existente. Com isso não iremos interferir/trocar o valor da variável já existente se não for necessário.

1.3 - Interpolação
    Uma forma mais elegante de concatenar uma string.

1.4 - Mapas
    Quando temos um objeto, podemos utilizar o Mapa para verificar se tem(has) o valor XXX, remover(delete) um atributo com o seu valor, entre outras funções que vem para nos ajudar no dia a dia. :)

1.5 - Conjuntos
    É um tipo de objeto. 

1.6 - Atribuição via desestruturação
    A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.


Para melhorar a programação no dia a dia :)
A - Typeof
    Usando o typeof
        Tipo	            Resultado
        Undefined	        "undefined"
        Null	            "object"
        Boolean	            "boolean"
        Number	            "number"
        String	            "string"  
        Function object     "function"
        E4X XML object	    "xml"
        E4X XMLList object	"xml"
        Any other object	"object"
    
    Exemplos
    // Números - Numéricos
    typeof 37 === 'number';
    typeof 3.14 === 'number';
    typeof Math.LN2 === 'number';
    typeof Infinity === 'number';
    typeof NaN === 'number'; // Apesar de ser "Não-Numérico"
    typeof Number(1) === 'number'; // mas nunca utilize desta forma!

    // Strings - Seqüências de caracteres
    typeof "" === 'string';
    typeof "bla" === 'string';
    typeof (typeof 1) === 'string'; // typeof sempre retorna uma string
    typeof String("abc") === 'string'; // mas nunca utilize desta forma!

    // Booleans - Lógicos booleanos
    typeof true === 'boolean';
    typeof false === 'boolean';
    typeof Boolean(true) === 'boolean'; // mas nunca utilize desta forma!

    // Undefined - Indefinidos
    typeof undefined === 'undefined';
    typeof blabla === 'undefined'; // uma variável indefinida

    // Objetos
    typeof {a:1} === 'object';
    typeof [1, 2, 4] === 'object'; // use Array.isArray ou Object.prototype.toString.call para diferenciar os objetos das arrays
    typeof new Date() === 'object';

    typeof new Boolean(true) === 'object'; // isto é confuso, portanto não use desta forma!
    typeof new Number(1) === 'object'; // isto é confuso, portanto não use desta forma!
    typeof new String("abc") === 'object';  // isso também é confuso, assim evite usar esta construção!

    // Funções
    typeof function(){} === 'function';
    typeof Math.sin === 'function';

    // Desde os primóridos do JavaScript
    typeof null === 'object';

    typeof /s/ === 'function'; // Chrome 1-12 ... // Não-conforme no ECMAScript 5.1
    typeof /s/ === 'object'; // Firefox 5+ ...    // Conforme no ECMAScript 5.1
    No IE 6, 7 e 8, typeof alert === 'object'


    Bibliográfia
        https://www.youtube.com/watch?v=j6PcqLAiYK8&list=PLoNyKJJ130VEz1KUQBh1rBkcb1nlP8kA_&index=6

        https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
