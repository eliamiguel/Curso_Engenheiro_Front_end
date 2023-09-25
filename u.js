function SeresVivo (nome, idade){
  this.nome= nome;
  this.idada=idade
}
function Pessoa (nome, idade,tipo){
  SeresVivo.call(this, nome, idade)
this.tipo = tipo;
}