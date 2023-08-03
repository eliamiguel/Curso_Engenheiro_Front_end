const meuMap = new Map();
meuMap.set('Nome', 'Elias Miguel');
meuMap.set('ano', 22);
console.log(meuMap); 
console.log(meuMap.size);
console.log(meuMap.has('Idade'));

for (let chave of meuMap.keys()){
  console.log(chave)
}
for (let valor of meuMap.values()){
  console.log(valor)
}
for (let entrada of meuMap.entries()){
  console.log(entrada);
}
 meuMap.forEach(function(item){
console.log(item)

 })
 const nome = meuMap.get('ano');
 console.log(nome);
 meuMap.delete('Nome')
 console.log(meuMap); 

const meuSet = new Set();
meuSet.add('48956151899');
meuSet.add('95929295959');
meuSet.add('95926925958');

 
// meuSet.forEach(function(valor){
//   console.log(valor)
// });

for(let chaves of meuSet.keys()){
  console.log(chaves);
}
 const array = ['Elias', 'João', 'Alberto', 'Filipe', 'João', 'Filipe'];
 const ArraySemSet = new Set([...array])
 console.log( ArraySemSet)
  const ArraySemRepitiçao = [...ArraySemSet]

  console.log(ArraySemRepitiçao)