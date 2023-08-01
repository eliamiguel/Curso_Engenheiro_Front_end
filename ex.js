
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

