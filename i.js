class Conta {
  constructor(titulo, numero){
    this.titulo= titulo;
    this.numero = numero
  }
}
class contaPoupanca extends Conta{
  constructor(juros){
    super("Elias", 8909)
    this.juros=juros
  }
  calcular (pular){
    console.log(pular)
  }
}
class contaCredito extends Conta{
  constructor(credito){
    super("Neves", 54623)
    this.credito = credito
  }
}
const conta1= new Conta("João", 123456)
const contaPoupanca1 = new contaPoupanca(0.2)
const contaCredito1 = new contaCredito(8520)

console.log(contaPoupanca1)
contaPoupanca1.calcular("carlito")
console.log(contaCredito1)
console.log(conta1)

const comparametros = (login, senha)=>{
  return new Promise((resolve, reject)=>{
    try{
      resolve(
        console.log(`${login} + ${senha}`)
      )
    }catch(e){
      reject(console.log("erro"))
    }
  })

}

const semParametro = new Promise((res, rej)=>{
  try{
    res("ola mundo")
  }catch(e){
    rej("olha o erro")
  }
} )
 function executar(){
  console.log("inicio")
 semParametro.then(evento=>console.log(evento))
 comparametros('eliasperreiramiguel@gmail.com', 123456789).then(evento=>(console.log(evento))).catch(erro => console.log(erro))
  console.log("Fim")
}
executar()

const meuSet = new Set()
meuSet.add('111111111111')
meuSet.add('222222222222')
meuSet.add('333333333333')
meuSet.add('444444444444')
console.log(meuSet)
console.log(meuSet.has('888888888'))
for(let valor of meuSet.values() ){
  console.log(valor)
}
for(let estend of meuSet.entries() ){
  console.log(estend)
}
const meuMap = new Map()
meuMap.set("nome", "Elias")
meuMap.set("curso", "Front")
meuMap.set("Ano", 24 )
console.log(meuMap)
const dados = meuMap.get("nome")
console.log(dados)
const nomes= ['Elias', 'Elias','Filipe', 'Gustavo', 'Gilde', 'Filipe', 'Flavio']

const exclirNomeRepetido= new Set([...nomes])
console.log(exclirNomeRepetido)
const retornarComoArray = [...exclirNomeRepetido]
console.log(retornarComoArray)


const conhecimentos = ['Elias', 'Filipe', 'Alberto']
const cursos = conhecimentos.map(item =>{
 return { nom : item,
  curso :'Front-end'
}
})
cursos.push({
  nom:'Fabio',
  curso:'Backend'
})
console.log(cursos)
 const filtrar = cursos.filter(item=>{
  return 
 })








