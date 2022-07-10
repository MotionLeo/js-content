function saudacao(nome){
    //console.log(`Bão dia, ${nome}`);
    return `Bão dia, ${nome}`; //Retorna um valor
}

const variavel = saudacao('Daniel'); //Valor retornado da função armazenado numa variável
console.log(variavel)
saudacao('Leonardo');
saudacao('Mariane');


function soma(x = 1, y = 1){
    const resul = x + y;
    return resul //Após o return, códigos abaixo dele não serão executados
}

console.log(soma(2,2));
console.log(soma(30,43));
console.log(soma(10,2));

const raiz = function(n){ //Criando funções diretamente dentro de uma variável
     return n ** 0.5
}; //No caso dessa função, se usa o ponto e vírgula

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(81));


const raizArrow = n => n ** 0.5 //Arrow function. Exatamente igual uma função porém bem mais simplificada

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(81));