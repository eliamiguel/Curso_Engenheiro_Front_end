
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

function Dipositivos(computador,celular, tablete, versao){
  this.computador = computador;
  this.celular =celular;
  this.tablete = tablete;
  this.versao = versao;
  this.potencia = function(){
    console.log("potencia")
  }
}
const DipositivosMateus1 = new Dipositivos("PHP", "Xiaome", "Ipad", 2.7)
console.log(DipositivosMateus1);




const dipositivos = {
  computador:"PHP",
  celular : "Xiaome",
  tablete:"Ipad",
  versao: [2.7, 1.1, 5.3, 7.2],
}
  const computador = "PHP";
  const celular = "Xiaome";
  const tablete = "Ipad";
  const versao = [2.7, 1.1, 5.3, 7.2];

console.log(typeof computador)
console.log(typeof celular)
console.log(typeof tablete)
console.log(versao instanceof Array)

console.log(Object.values(dipositivos));
console.log(Object.keys(dipositivos));
console.log(Object.values(dipositivos).length);

