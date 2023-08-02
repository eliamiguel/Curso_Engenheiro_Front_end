
const pessoa ={
  altura: 1.70,
  nome: 'Julio',
  pele: 'branca'
}

function Carro(modelo, fabricante, anosfabrica ){
  this.modelo = modelo;
  this.fabricante = fabricante;
  this.anosfabrica = anosfabrica;
  this.motor= function(){
    console.log("acelerar")
  }
}
const carro1 = new Carro('Ferrari', 'Rsscc', 2300);
const carro2 = new Carro('Kia', 'taos', 2010);
console.log(Object.values(pessoa));
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa).length);

console.log(carro1)
console.log(carro2)
carro1.motor();

const Carros =['Kia', 'Toyota', 'Mercedes', 'Huydai'];

for (let i =  0; i < Carros.length; i++){
  console.log(Carros[i])
}


Carros.forEach(function(item1){
  console.log(item1)
});

const Animais =['Cachorro', 'gato', 'leão', 'Macaco']; 
const animais1 = Animais.map(function(item){
  return {
    nome:item,
    raca:'Pastor alemão',
  }
})
console.log(animais1)
animais1.push({
  nome:'passaro',
  raca:'papagaio',
})
console.log(Object.keys(animais1));
console.log(Object.values(animais1));
const procura = animais1.find(function(itemAtual){
  return itemAtual.nome == 'passaro';
}); 
console.log(procura);
const todosAminaisaoa = animais1.every(function(item1){
  return item1.raca == 'Pastor alemão';
})
console.log(todosAminaisaoa);
const umAminaispapagaio = animais1.some(function(item1){
  return item1.raca == 'papagaio';
})
console.log(umAminaispapagaio);
const numero = [20,30, 40,30];
 const numeros = numero.reduce(function(aculumador, item2){
  return aculumador +=item2
 })
 console.log(numeros);

