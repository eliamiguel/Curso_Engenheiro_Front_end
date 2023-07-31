const redesSociais = ["Facebook", "Instagram", "Twiter"];

for (let i =0; i < redesSociais.length; i++){
  console.log(redesSociais[i]);
}

redesSociais.forEach(function(nome, indice){
  console.log(indice + nome);
})
 
const alunos =['João', 'Filipe', 'Maria', 'Julia'];

const alunos2 = alunos.map(function(item){
  item = {
    nome: item,
    curso: 'frontend',
  }
  return item;
})
console.log(alunos2)

const procura = alunos2.find(function(intemAtual){
  return intemAtual.nome == 'Maria';
})
console.log(procura);
const procura1 = alunos2.findIndex(function(intemAtual){
  return intemAtual.nome == 'Maria';
})

const todosAlunosFrontend = alunos2.every(function(aluno){
  return aluno.curso === 'frontend';
})
console.log(todosAlunosFrontend);
alunos2.push({
  item : 'Elias',
  curso : 'Backend',
})

const todosAlunosbackend = alunos2.some(function(aluno){
  return aluno.curso == 'Backend';
})
console.log(todosAlunosbackend)