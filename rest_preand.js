function soma(a, b, c) {
let somar = a+b+c;
return somar
}
console.log(soma(10,20,30));

// function somar (){
//   let soma =0;
//   for (let i=0; i < arguments.length; i++){
//     soma += arguments[i];
//   }
//    return soma;
// }
// console.log(somar(30,30,30));
function somar (...numeros){
  const soma = numeros.reduce(function(atual, num){
    atual += num;
    return atual;
  }, 0) 
  return soma;
}
console.log(somar(30,30,30));
const frontEnd = ['HTML', 'CSS', 'JavaScript', 'SASS'];
const BackEnd= ['JAVA', 'QSL', 'Banco de dados', 'PHP'];

// const CursoProgramacao = frontEnd.concat(BackEnd);

const CursoProgramacao = [...frontEnd, ...BackEnd] 
console.log(CursoProgramacao);
const carroMaria = {
  modelo: 'Kia',
  fabricante: 'ford',
  motor: 2.3
}
const carroJulia = {
  ...carroMaria,
  motor:1.5
}

console.log(carroJulia);
console.log(carroMaria);