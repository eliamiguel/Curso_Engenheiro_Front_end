const promiseSemParametros = new Promise((resolve, rejact)=>{

  try {
    let soma = 0;
    for (let i =0; i < 100000; i++){
      soma++
    }
   resolve (soma)
  }catch(e){
    rejact('erro, na digitação do numero')
  }
})


executar();
 const comparametros = (login, senha) => {
 return new Promise((resover, rejeitar)=>{
    setTimeout(() => {
      resover(`Voce logo com o: ${login} e a senha ${senha}`)
      
    }, 3000)
  })
 }
 comparametros('eliasperreiramiguel@gmail.com', 12364659).then(resposta => console.log(resposta))

 async function executar(){
  console.log('Inicio')
  await promiseSemParametros.then(resposta => console.log(resposta)).catch(erro => console.log(erro))
  console.log('fim')
  }