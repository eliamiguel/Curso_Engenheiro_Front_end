class Conta {
  constructor(titular, numero, saldo){
    this.titular = titular;
    this.numero = numero,
    this.saldo = saldo
  }

}
class contaPupanca extends Conta{
  #juros = 0.2;
  constructor(){
    super('Matheus', 111111111, 500.00);
  }
  exibrijuros (){
    console.log(this.#juros)
  }
}
class contaCredito extends Conta {
  constructor (limite){
    super('Juliana', 222222, 800.00);
    this.limite = limite;
  }
}

const contaPoupacapessoa1 = new contaPupanca();
const contaCreditopessoa1 = new contaCredito(5.000)
const contaPoupacapessoa2 = new contaPupanca(10.2)
const contaCreditopessoa2 = new contaCredito(8.000)


console.log(contaPoupacapessoa1)
contaPoupacapessoa1.exibrijuros();
console.log(contaCreditopessoa1)
console.log(contaPoupacapessoa2)
contaPoupacapessoa2.exibrijuros();
console.log(contaCreditopessoa2)




function Conta1 (titular, numero, saldo) {
    this.titular = titular;
    this.numero = numero,
    this.saldo = saldo
  }


function contaPupanca1 (titular, numero, saldo, juros){
  Conta1.call(this,titular, numero, saldo )
  let _juros = juros
  this._juros = function(){
     return _juros
  }
  this.setAlterar = function(balor){
    _juros = balor
  }
  
}
 function contaCredito1 (titular, numero, saldo, limite) {
  Conta1.call(this,titular, numero, saldo)
  this.limite = limite
  
  
  
}

const contaPoupacapessoa3 = new contaPupanca1('Gabriel', 333333, 900.003, 3.6);
const contaCreditopessoa3 = new contaCredito1('Paizinho', 313131, 780.00, 393936)
console.log(contaPoupacapessoa3)
console.log(contaCreditopessoa3)


const semParametro= new Promise((resolva, reject)=>{
  try{
    resolva('Tudo o que')

  }catch(e){reject("ghjgjkhlkjklçjplklokp")
}
})

const comparametro = (senha, login) => {
  return new Promise ((reol, rejei)=>{
   try{
    setTimeout(() => {
      
    }, timeout)
    reol("fdfdfdffdff")
   }catch(e){
    console.log("ljklhjkjkgjhhgh")
  }
  })
}

async function executar(){
 comparametro("ftyyutuytyyu", 5546567).then(re => console.log(re)).catch( err => console.log(err))
console.log('Inicio')
 await semParametro.then(resposta => console.log(resposta))
 console.log('Fim')
}
executar()
const meuPa = new Map()
meuPa.set("nome", "elias")
meuPa.set("Ano", 19)
console.log(meuPa)
const nome= meuPa.get('nome')

console.log(nome)
console.log(meuPa.has("nome"))
meuPa.forEach(function(item){
  console.log(item)
})
for (let valor of meuPa.values()){
  console.log(valor)
}
for (let atributo of meuPa.keys()){
  console.log(atributo)
}
for (let entradas of meuPa.entries()){
  console.log(entradas)
}
const arrays= ['Elias', 'Paulo', 'Guilherme', 'Elias', 'Paulo']
const semRepeticao = new Set(arrays)

const transformarArrei = [...semRepeticao]
console.log(semRepeticao)
console.log( transformarArrei)

const array= ['Alvaro', 'Tio', 'Miguel']
const curso = array.map(function(item){
  return {
    nome:item,
    curso:'HTML'
  }
})
