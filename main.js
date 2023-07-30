function ContaBancaria(saldo, titular, numero, depositar, sacar, consultar){
  this.saldo = saldo;
  this.titular = titular; 
  this.numero = numero;
  this.depositar = function (){
    console.log('Realiza um depósito na conta, aumentando o saldo.')
  };
  this.sacar = function () {
    console.log('Realiza um saque na conta, diminuindo o saldo.')
  };
  this.consultar = function() {
    console.log('Retorna o saldo atual da conta.')
  }
}

const contaMaria = new ContaBancaria(7000, "Maria", 5987-8948-3564-7984);
const contaMatheus = new ContaBancaria(800, "Matheus", 1000-1000-1000-1000);

console.log(contaMaria);
console.log(contaMatheus);