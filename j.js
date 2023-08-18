const nomes = ['Elias', 'Jão', 'Guilherme', 'Matheus', 'Filipe'];

nomes.forEach(item =>{
  console.log(item)
})
 const ojetos = nomes.map(item =>{
  return {
    nome: item,
    curso:'Front-End'
  }
 })

 ojetos.push({
  nome:'Alvaro',
  curso:'Backend'
 })
 console.log(ojetos)

 const finde = ojetos.find(function(item){
return item.curso == 'Backend'

 });
 console.log(finde);
 const filtrar = ojetos.filter(item => {
  return item.curso === 'Front-End'
 })
 console.log(filtrar)
 const existeso= ojetos.every(item =>{
  return item.curso === 'Front-End'
 })
 console.log(existeso)
 const somente = ojetos.some(item=>{
  return item.curso === 'Backend'
 })
 console.log( somente)

 const soma = [10,10,10]
 const somar = soma.reduce(function(acumular, item){
  acumular+=item
  return acumular
 })
 console.log(somar)
 console.log(Object.keys(ojetos))
 console.log(Object.values(ojetos))
 console.log(Object.values(ojetos).length)

 function Conta (titulo, numero, saldo){
this.titulo = titulo;
this.numero = numero;
this.saldos = function(){
  console.log(saldo)
}
 }

 function ContaPoupanca (titulo, numero, juros, saldo){
Conta.call(this,titulo, numero, saldo )
this.juros = juros;
 }
 function ContaCredito(titulo, numero, credito, saldo){
  Conta.call(this,titulo, numero, saldo )
  this.credito = credito;
 }
 const contaPoupanca1 = new ContaPoupanca('João', 6879, 0.2, 10000)
 const contaCredito1 = new ContaCredito('João', 5698,8.000, 200000)
 console.log(contaPoupanca1)
 contaPoupanca1.saldos()
 console.log(contaCredito1)
 contaCredito1.saldos()

class Conta2 {
  constructor(titulo, numero, saldo){
    this.titulo =titulo;
    this.numero = numero;
    this.saldo =saldo
  }
}
class ContaPoupanca2 extends Conta2 {
  constructor(juros){
    super('Neves', '65464', '98956232656')
    this.juros = juros
  }
}
const pessoa1 = new Conta2('Alberto', 9999, 10101010)
const pessoa2 = new Conta2(0.2)
console.log(pessoa1)
console.log(pessoa2)


 const semParametro = new Promise((resolve, reject)=>{
  try{
    const soma=[ 'Elias', 'Paulo', 'Miguel']
    for(let i=0; i > soma; i++){
      soma[i]
      
    }
    resolve(console.log(soma))

  }catch(e) {
    reject(console.log("erro"))
  }
 })

 const comParametro = (senha, login)=>{
  return new Promise((s,r)=>{
    try{
      s('olá')
    }catch(e){
      r(console.log(`voce ${senha} e a senha ${login}` ))
    }
  })
 }
 console.log( comParametro('elias@gmail.com', 123940).then(res => console.log(res)).catch(erro=>console(erro))
 )
 function executa (){
console.log('Inicio')
 semParametro.then(res=> console.log(res)).catch(e=> console.log(e))
  console.log('Fim')
 }
 


 
 
 executa()