"use strict";

var redesSociais = ["Facebook", "Instagram", "Twiter"];
for (var i = 0; i < redesSociais.length; i++) {
  console.log(redesSociais[i]);
}
redesSociais.forEach(function (nome, indice) {
  console.log(indice + nome);
});
var alunos = ['João', 'Filipe', 'Maria', 'Julia'];
var alunos2 = alunos.map(function (item) {
  item = {
    nome: item,
    curso: 'frontend'
  };
  return item;
});
console.log(alunos2);
var procura = alunos2.find(function (intemAtual) {
  return intemAtual.nome == 'Maria';
});
console.log(procura);
var procura1 = alunos2.findIndex(function (intemAtual) {
  return intemAtual.nome == 'Maria';
});
var todosAlunosFrontend = alunos2.every(function (aluno) {
  return aluno.curso === 'frontend';
});
console.log(todosAlunosFrontend);
alunos2.push({
  item: 'Elias',
  curso: 'Backend'
});
var todosAlunosbackend = alunos2.some(function (aluno) {
  return aluno.curso == 'Backend';
});
console.log(todosAlunosbackend);