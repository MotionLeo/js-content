function criaPessoa (nome, sobrenome, idade){
    return { nome, sobrenome, idade }; //Se o nome do metódo for o mesmo da variável que irá recebela, não precisa usar os dois pontos (nome: nome,)
}


const pessoa1 = criaPessoa('Leonardo', 'Daniel', 23);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 33);
const pessoa3 = criaPessoa('Mariane', 'Moraes', 20);
const pessoa4 = criaPessoa('Dalila', 'Ferreira', 41); 
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);


const pessoaMetodo = {
    nome: 'Gerso',
    sobrenome: 'Pires',
    idade: 36,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi`);
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        ++this.idade;
    }
};


console.log(pessoaMetodo.nome);
console.log(pessoaMetodo.sobrenome);
pessoaMetodo.fala();
pessoaMetodo.incrementaIdade();
pessoaMetodo.fala();
pessoaMetodo.incrementaIdade();
pessoaMetodo.fala();
