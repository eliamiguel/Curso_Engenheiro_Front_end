class Pessoa {
  constructor(nome,raca){
    this.nome = nome;
    this.raca = raca;
  }
  cagam (cagar){
    console.log(` ${this.nome}  de ${this.raca},${cagar} `)

  }
}
class animais extends Pessoa{
  constructor( porte){
    super('Leão', 'Peludo')
    this.porte = porte;
  }
}

const animal1 =new animais ('Grande')
const pessoa1 = new Pessoa('Matheus', 'branco')
const pessoa2 = new Pessoa('Lidia', 'preta')
console.log(pessoa1)
console.log(pessoa2)
console.log(animal1)
pessoa1.cagam('Cagam')
pessoa2.cagam('cagam')
