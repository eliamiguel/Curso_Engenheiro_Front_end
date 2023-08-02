const retornar1 = () =>{
  console.log("Olá Mundo!")
}
retornar1();

const retornar2 = () =>{
  return "Olá Mundo!";
 }
 console.log(retornar2());

 const retornar = () => "Olá Mundo!";
 console.log(retornar());

 const carros = () => {
  return {
    modelo: 'Toyota Rio',
    fabricante: 'Toyota',
    ano: 2020,
  }
 }
 console.log(carros());

 const carros1 = () => ({
    modelo: 'Toyota Rio',
    fabricante: 'Toyota',
    ano: 2020,
  })
 console.log(carros1());