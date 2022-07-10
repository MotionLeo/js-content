//                0       1        2
const alunos = ['Leo', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[0]);
alunos[0] = 'Eduardo'; //Alterando um valor já existindo no array
alunos[3] = 'Luiza'; //Adicionando um novo valor no array a partir do último
console.log(alunos);
console.log(alunos.length); //Verifica a quantidade de dados que possui no array
alunos[alunos.length] = 'Luana'; //Adiciona um novo dado no fim do array
console.log(alunos);
alunos.push('Leonardo'); //Dessa forma também adiciona um novo dado no fim do array de forma mais simplificada
console.log(alunos);
alunos.unshift('Esteves'); //Adiciona o dado no início do array ou no indíce 0
console.log(alunos);
alunos.pop(); //Remove um dado do final do array
const removido = alunos.pop(); //É possível adicionar o dado removido numa variável
console.log(alunos);
console.log(removido);
alunos.shift(); //Remove o dado do primeiro array
console.log(alunos);
delete alunos[1]; //Deleta um dado do array sem alterar os indíces
console.log(alunos);
console.log(alunos.slice(0, -1)); //Slice também funciona para cortar os array
console.log(alunos instanceof Array)