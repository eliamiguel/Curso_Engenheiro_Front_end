// function Pessoa(nome){
//   this.nome = nome;
//   this.dizOi= function (){
//     console.log(this.nome + "diz olá");
//   }
// }

// function Funcionario(nome, cargo, salario){
//   this.nome = nome;
//   this.cargo =cargo;
//   this.salario =salario;
// }
// const pessoa1 = new Pessoa("Maria");
// const funcionario1 = new Funcionario("Maria", "Dev Front-end", 5000);
// pessoa1.dizOi();
// console.log(pessoa1);
// console.log(funcionario1);

// Herança

function Pessoa(nome){
  this.nome = nome;
  
}

function Funcionario(nome, cargo, salario){
  this.cargo =cargo;
  this.salario =salario;
  Pessoa.call(this, nome);
  this.dizOi= function (){
    console.log("Nome: " + this.nome);
  }
  this.dizCargo= function (){
    console.log("Cargo: " + this.cargo);
  }
  this.dizSalario= function (){
    console.log("Cargo: " + this.salario);
  }
}
const funcionario1 = new Funcionario("Maria", "Dev Front-end", 5000);
const funcionario2 = new Funcionario("João", "Dev back end", 10000);
funcionario1.dizOi();
funcionario1.dizCargo();
funcionario1.dizSalario();
funcionario2.dizOi();
funcionario2.dizCargo();
funcionario2.dizSalario();
