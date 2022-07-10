let nomeLet = 'João'; //Variável em string ou texto

console.log(nomeLet, "nasceu em 1984");
console.log("Em 2000,", nomeLet, "conheceu Maria");
console.log(nomeLet, "casou-se com Maria em 2012");
console.log("Maria teve 1 filho com", nomeLet,"em 2015");
console.log("O filho de ",nomeLet, "se chama Eduardo");

const nomeConst = 'João'; //Constante
console.log(nomeConst);

const primeiroNumero = 20;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);


const verdadeiro = true;
console.log(verdadeiro);

let umaString = "Um \"texto\""; //é possível usar barras invertidas para fazer uso de aspas ou outros caracteres reservados
console.log(umaString);
let outraString = "Outro texto";
console.log(outraString.indexOf('o')); //Mostra em qual indíce está a letra O
console.log(outraString.slice(6, 11)); //Fatia a palavra do começo de onde foi definido, no caso indíce 6, até um outro indíce, 11 no caso
console.log(outraString.length); //Mostra quantos caracteres tem a palavra, inclui espaço
console.log(outraString.toUpperCase()); //Deixa a palavra toda maiúscula
console.log(outraString.split(' ')); //Separa a frase em um array removendo os espaços, assim cada palavra ocupa um espaço no array


// IEEE 754-2008
let num1 = 1; //number
let num2 = 2.5; //number

console.log(num1.toString() + num2); //toString() transforma o valor em uma string apenas naquele momento, nesse caso ele ainda é um number
console.log(typeof num1);
console.log(num1.toString(2)) //Utilizando o 2 dentro do toString() se tem a representação binária do número
num1 = 10.5789432155798;
console.log(num1.toFixed(2)); //Coloca um limite nas casas decimais
console.log(Number.isInteger(num1)); //Verifica se o número é inteiro ou não com true ou false
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); //Verifica se a conta for um Not a Number(NaN) com true ou false

const a = [1, 2, 3];
const b = [...a]; //Dessa forma o array copia o conteúdo de dentro de A
const c = b; //Dessa forma é apenas uma referência, sendo assim, o que alterar em B altera em C

a.push(4)
b.pop();
console.log(a, b, c);

/* Valores que o JS considera falso
Chamados de FALSY
false (Valor literal false)
0
'' "" `` (valor vazio)
null / undefined
NaN
** Qualquer outro valor diferente desses serão considerados como true */

console.log('Leonardo' && '' && 'Daniel'); //Fazendo dessa forma, o valor não retorna true ou false, ele retorna o primeiro valor que faz operação fugir dela, nesse caso o primeiro valor false

// No caso do OR ||, ele retorna sempre o primeiro valor verdadeiro
console.log(0 || false || null || 'Batata' || NaN || true || 3);


//Condição ternária
// (condição) ? 'Valor para verdadeiiro : 'Valor para falso';
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario <= 1000 ? 'Usuário VIP' : 'Usuário normal'; //Operação ternária
console.log(nivelUsuario);

//Função construtora, nesse caso new Date();
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia); //01/01/1970 Timestamp Unix
//const data = new Date(2019, 3, 20, 15, 14, 27); //0 Janeiro -> 11 Dezembro ;;; a, m, d, h, M, s, ms
const data = new Date('2019-04-20 20:20:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //Mês começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay()); //Dia da semana também começa no 0 (domingo é o 0)
console.log(data.toString());

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const dataFunc = new Date();
const dataBrasil = formataData(dataFunc);
console.log(dataBrasil);

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [numeroPrimeiro, numeroSegundo, ...resto] = numeros;
console.log(numeroPrimeiro, numeroSegundo);
console.log(resto);

const numerosMatriz = [ 
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9] 
];
const [lista1, lista2, lista3] = numerosMatriz; //Armazenando o número 6 dentro de uma variável através da atrobuição via desestruturação
console.log(lista3[2]);

const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Daniel',
    idade: 23,
    endereco:{
        rua: 'Arlindo Cruz',
        numero: 0
    }
};
const { nome: n = '', sobrenome, idade, endereco: {rua, numero} } = pessoa; // Atribuição via desestruturação em objetos
console.log(n, sobrenome, idade, rua, numero);