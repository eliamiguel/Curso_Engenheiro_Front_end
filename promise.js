const promiseSemParametros = new Promise ((resolve, reject)=> {
  try{
    let some =0; 
    for (let i=0; i <1000000000; i++){
      some ++
    }
    resolve(some)
  }catch(e){
    reject('Todos os numero estão errados')
  }
}); 





 const comParametro = (login, senha ) => {
  return new Promise((resolver, rejeitar)=>{
    setTimeout(()=> {
      resolver(`Logado com o Usuario ${login}`)
    })
  })
 }

 comParametro('eliasperreiramiguel@gmail.com', 12345).then(resultar => console.log(resultar));


 async function executador (){
  console.log('Inicio')
 await promiseSemParametros.then(resultado => console.log(resultado)).catch(erro=> console.log(erro))
  console.log('fim')
 }
 executador();