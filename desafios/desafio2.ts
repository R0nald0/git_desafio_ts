
enum Profissao{
    "ATRIZ","PADEIRO"
}

class Pessoa {
   nome ?: string;
   idade ?: number;
   profissao!: Profissao
}
let pessoa1  = new Pessoa()
   pessoa1.nome = "maria";
    pessoa1.idade = 29;
   pessoa1.profissao = Profissao.ATRIZ


let pessoa2 = new Pessoa
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.PADEIRO;

let pessoa3 : Pessoa ={
    nome: "laura",
    idade: 32,
    profissao: Profissao.ATRIZ
};

let pessoa4 : Pessoa ={
    nome :"carlos",
    idade :19,
    profissao : Profissao.PADEIRO
};