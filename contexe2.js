
 const map1 = new Map();
 map1.set('modelo', 'Kia');
 map1.set('Farbricante', 'Lagoa');
 map1.set('AnoFabricacao', 1997);
 console.log(map1);
 
 console.log(map1.size);
 
 console.log(map1.has('Farbricante'))
 const ca = map1.get('modelo')
 console.log(ca)
 map1.forEach(function(inte){
  
 })
 for (let valor of map1.entries()){
  console.log(valor)
 }
 for (let chave of map1.keys()){
  console.log(chave)
 }
 for (let chaves of map1.values()){
  console.log(chaves)
 }
 const nomes =['Elias', 'Paulo', 'Elias', 'Domingos', 'João', 'João'];
 const nome = new Set([...nomes])
 console.log(nome);
 const setemArray = [...nome];
 console.log(setemArray )