function Pessoa(nome){
  this.nome = nome;
  this.dizOi= function (){
    console.log(this.nome + "diz olá");
  }
}

function Funcionario(nome, cargo, salario){
  this.nome = nome;
  this.cargo =cargo;
  // para retornar valor do atributo privado
  let _salario =salario;
  this.getsalario= function (){
    return _salario
  }
  // para alterar o valor do atributo privado
  this.setSalario = function (valor){
    if (typeof valor === 'number'){
      _salario = valor;
    }
    
  }
}
const pessoa1 = new Pessoa("Maria");
const funcionario1 = new Funcionario("Maria", "Dev Front-end", 5000);
pessoa1.dizOi();
console.log(pessoa1);
console.log(funcionario1);
funcionario1.setSalario('mil');
console.log(funcionario1.getsalario());
