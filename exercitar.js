function Animais(nome){
  this.nome =nome;
}
function AnimaisVetebrados(nome, raça, porte){
  Animais.call(this, nome);
  this.raça = raça;
  this.porte = porte;
}
function AnimaisInvetebrados (nome,raça, porte, tipo){
  Animais.call(this, nome);
  AnimaisVetebrados.call(this,nome, raça, porte);
  let _tipo= tipo
  this.gettipos= function(){
  return _tipo 
  }
this.setAlteraValortipo = function(valor){
  if(typeof valor === "string"){
  return _tipo= valor;
  }
}
}
AnimaisInvetebrados.tipo = 'com ossso';
const animaisVetebrados1 = new AnimaisVetebrados('Urso','Peludo', 'Grande porte');
const animaisIventebrados1 = new AnimaisInvetebrados('Aranha', 'Sem pelo', 'Pequeno porte', 'Sem Osso');
console.log(animaisVetebrados1);
console.log(animaisIventebrados1.setAlteraValortipo("com osso"));

const conhecimento = ['HTML', 'CSS', 'JAVA', 'JavaScript'];
for (let i=0; i < conhecimento.length; i++){
  console.log(conhecimento[i])
};
conhecimento.forEach(function(item){
  return item
})
console.log(conhecimento); 
const nomes = ['Elias', 'Maria', 'Juliana', 'Marcelo'];
const nome = nomes.map(function(nome){
  return {
    nome:nome,
    curso:'JavaScript', 
  }
})
console.log(nome);
nome.push({
  nome:'Neves',
  curso: 'CSS'
})
console.log(Object.keys(nome));
console.log(Object.values(nome));
console.log(Object.values(nome).length);

 const temAlunoDoCSS = nome.find(function(item){
  return item.curso == 'CSS';
 });
 console.log(temAlunoDoCSS);
 const todosSaoAlunos =nome.every(function(itemAtual){
  return itemAtual.curso ==='JavaScript'
 });
  console.log(todosSaoAlunos);
  const temUmAlunoCss =nome.some(function(itemAtual){
    return itemAtual.curso ==='CSS'
   });
   console.log(temUmAlunoCss);

   const numero = [30,30,30]
   const soma = numero.reduce(function(acumular, item){
      acumular+=item
    return acumular;
  })
  console.log(soma);
  const minhaFunçao = (a, b) => {
    let soma =0;
    return soma= a+b

  }

  console.log(minhaFunçao(10,10));
  const carror = () => ({
    modelo: 'Masda',
    anoFaricacao: 2012
  });
  console.log(carror());

//   function calcular (){
//     let soma=0;
//     for( let i=0; i < arguments.length; i++){
//       soma += arguments [i];
//     }
//      return soma;
//   }
// console.log(calcular(10, 10, 10))
function calcular (...num){
const soma = num.reduce(function(acular, atual){
   acular += atual;
   return acular;
})
return soma;
}
console.log(calcular(20, 20, 20));

const timesfutbolAngola =['Petro', 'Da-gosto', 'Creciatito do Kaala']
const timesfutbolEuropa = ['Barça', 'Real', 'Juventos', 'Acemila']

// const todosOstimes = timesfutbolAngola.concat(timesfutbolEuropa);
const todosOstimes = [...timesfutbolAngola, ...timesfutbolEuropa]

console.log(todosOstimes);

const carro3 = {
  nodelo : 'Masda2', 
  fabricante : 'toyota',
  ano: 2029
}
const carro4 = {
  ...carro3,
  ano: 2030
}
console.log(carro4)

console.log(carro3.ano)



const [item1, item2, item3, ...outros] = todosOstimes;
console.log(item1)
console.log(item2)
console.log(item3)
console.log(outros)