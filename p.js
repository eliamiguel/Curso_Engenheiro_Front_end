const alunos =['João', 'Elias', 'Alberto', 'Elias']
alunos.forEach(function(item){
  console.log(item)
})
const alistando = alunos.map(function(item){
  return{
    nome: item,
    curso:'Fronte'
  }
})
alistando.push({
  nome: 'Fernando',
  curso:'CSS'
})
alistando.push({
  nome: 'Elias',
  curso:'CSS'
})
console.log(alistando)
const findeswe = alistando.find(function(item){
 return item.curso ==='CSS'
})
console.log(findeswe)
const numeros =[20, 20,20]
const soma = numeros.reduce(function(e,i){
  return e+=i
})
console.log(soma)
const somar = (...numero)=>{
  let soma= 0;
  for(let i = 0; i<numero.length; i++){
    soma+= numero[i]
  }
   return soma

}

console.log(somar(23,56,89))

// const semParamentro = new Promise((res, rej) =>{
//   try{
//     res

//   }catch(e){
//     rej
//   }
// }) 
// semParamentro.then(respo => console.log(respo)).catch(e=>console.log(e))

// const comParamentro = (senha, login) =>{
//   return new Promise((r,i)=>{
//     try{

//       r(senha, login)
//     }catch(e){

// i()
//     }
//   })
// }
// comParamentro('khkjhkffdf',dbiuhiurehrui)



// class conta {
//   #saldo = 80;
//   constructor(nome,numero){
//     this.nome= nome;
//     this.numero = numero
//   }

//   adicionarSaldo(valor){
//     return valor
//   }
//   exibirSaldo (){
//     return this.#saldo+=23
//   }
// }
// class popanca extends conta {
//   constructor(juros){
//     super('joão', 132269 )
//     this.juros = juros
//   }
// }
const meuMap = new Map()
meuMap.set('nome', 'João')