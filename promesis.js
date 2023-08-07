const promessasemParametro = new Promise((resolve, reject)=>{
  try{
   const araayse =['João', 'Paulo', 'Gustavo'];
    for (let i =0; i < araayse.length; i++){
      araayse[i]
    }
    resolve(araayse)
  }catch(e){
    reject("Ocorreu um erro")
  }
})
async function executador(){
  console.log('Inicio')
 await promessasemParametro.then(resposta => console.log(resposta)).catch(erro => console.log(erro))
  console.log('Fim')
}


const promessasComParametro = (login,senha)=>{
  return new Promise((resolva, rejeitar )=>{
    setTimeout(() => {
      resolva(`Foi logo com o Email: ${login} e senha: ${senha}`)
    }, 3000);
  })
}
promessasComParametro('eliasperreiramiguel@gmail.com', 1234566).then((res)=> console.log(res))

executador();