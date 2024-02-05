let num :number;
let paalvra :string;
let palavraOuNum: number | string;
let qualquerCoisa:any;
const x : number = 10;

interface Pessoa{
    idade: number;
    nome: string;
    profissao?: string;
}

const PessoaEmpregada:Pessoa = {
    idade: 20,
    nome: "Rogerin",
    profissao: "Programador"
}

const PessoaDesempregada:Pessoa = {
    idade: 18,
    nome: "Ardenilson",
}

const arrayPessoa:Array<Pessoa> = [
    PessoaDesempregada,
    PessoaEmpregada
]

const arrayPessoa2:Pessoa[] = [
    PessoaDesempregada,
    PessoaEmpregada
]