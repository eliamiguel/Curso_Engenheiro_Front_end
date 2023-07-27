
const carroJoao ={
  modelo: 'fieste',
  fabricante: 'ford',
  anoFabricacao: '2020',
  acelerar: function() {
    console.log("acelerar");
  }
}

const carroMaria = {
  modelo: 'ka',
  fabricante: 'ford',
  anoFabricacao: '2021',
  acelerar: function(){
    console.log("acelerar")
  }
}
function Carro (modelo, fabricante, anoFabricacao, anoModelo){
  this.modelo = modelo;
  this.modelo =fabricante;
  this.anoModelo = anoModelo;
  this.anoFabricacao= anoFabricacao;
  this.acelerar = function () {
    console.log("acelerar")
  }
}
const carroJoao2 = new Carro("fieste", "ford", 2020, 2019);
const carroMaria2 = new Carro ("ka", "ford", 2021, 2018); 
console.log(carroJoao2);
console.log(carroMaria2);

const nome = "Elias";
const idade = 30;
const eMaiorDeIdade = true;
const conhecimento = ["html", "CSS", "JavaScript"];

const pessoa = {
  nome: nome,
  idade: idade,
eMaiorDeIdade: eMaiorDeIdade,
conhecimento: conhecimento,
} 

console.log(pessoa['nome']);
console.log(Object.values(pessoa));
console.log(Object.keys(pessoa));

const enderecojoao ={
  ciddade:"curitiba",
  bairro:"alto",
  rua:"maua",
  cep:5626262626,
}
console.log(enderecojoao);

function Endereco( cidade, bairro, rua, cep){
  this.cidade = cidade;
  this.bairro=bairro; 
  this.rua = rua; 
  this.cep = cep;
}
const enderocoisa = new Endereco ("redençaõo", "centro", "jão", 235659);
console.log(enderocoisa);