function conta(titular, numero_conta, saldo){
  this.titular = titular;
  this.numero_conta = numero_conta;
  this.saldo = saldo;
  

}
function ContaCorrente(titular, numero_conta, saldo, limite){
  conta.call(this, titular, numero_conta, saldo);
  let _limite = limite;
  this.getLimite = function (){
   return _limite;
    
  };
}
function ContaPoupanca (titular, numero_conta, saldo, juros){
  conta.call(this, titular, numero_conta, saldo)
  let _juros = juros;
  this.getJuros = function (){
    return _juros;
    
  };
}
const contaCorrente1= new  ContaCorrente("Maria", 1000-1000-1000-1000, 7000.00, 8000.00);
const contaPoupaca1= new ContaPoupanca("Maria", 1111-1111-1111-1111, 1000.00, 0.10);
const contaPoupaca2= new ContaPoupanca("João", 2222-2222-2222-2222, 2000.00, 0.20)

console.log(contaCorrente1);
console.log(contaPoupaca1)
console.log(contaPoupaca2);
console.log(contaPoupaca1.getJuros());
console.log(contaPoupaca2.getJuros());









