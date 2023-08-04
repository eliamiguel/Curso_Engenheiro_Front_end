"use strict";

var alunos = ['Elias Miguel'];
var AlunosNotas = alunos.map(function (nome) {
  return {
    alunos: nome,
    nota: 8
  };
});
console.log("Todos os alunos ");
AlunosNotas.push({
  nome: 'Maria Antunes',
  nota: 7
});
AlunosNotas.push({
  nome: 'Tito Junior',
  nota: 4
});
AlunosNotas.push({
  nome: 'Julio da Sila',
  nota: 6
});
AlunosNotas.push({
  nome: 'Paulo Alberto',
  nota: 5
});
console.log(AlunosNotas);
var verificarNota = AlunosNotas.filter(function (item) {
  return item.nota >= 6;
});
console.log("Alunos com a nota maior ou igual a 6 ");
console.log(verificarNota);

//  Esse é outro jeito que achei para resolver a atividade

function alunosENotas(nome, nota) {
  this.nome = nome;
  this.nota = nota;
}
console.log("Todos os alunos ");
var aluno = [];
aluno.push(new alunosENotas('Neves MIguel', 9));
aluno.push(new alunosENotas('Alvaros Manuel', 7));
aluno.push(new alunosENotas('Maura beng', 6));
aluno.push(new alunosENotas('Tiago Luis', 4));
aluno.push(new alunosENotas('José Armindo', 5));
console.log(aluno);
console.log("Alunos com a nota maior ou igual a 6 ");
var verificarNotaMaiorOuIgual = aluno.filter(function (item) {
  return item.nota >= 6;
});
console.log(verificarNotaMaiorOuIgual);